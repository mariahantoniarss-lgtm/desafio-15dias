// api/calendar.js
// Serverless function for Vercel (Node.js) to fetch Google Calendar iCal data,
// parse events, cache for 5 minutes, and return JSON for the frontend.

import ical from 'node-ical';

// In-memory cache
let cache = {
  timestamp: 0,
  events: []
};

// Classification helper – simple keyword based.
function classifyEvent(summary) {
  const lower = summary.toLowerCase();
  if (lower.includes('reunião') || lower.includes('reuniao')) return 'reuniao';
  if (lower.includes('ybera')) return 'ybera';
  // add more rules as needed
  return 'outro';
}

export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const now = Date.now();
  const CACHE_MS = 5 * 60 * 1000; // 5 minutes

  // Return cached data if fresh
  if (now - cache.timestamp < CACHE_MS && cache.events.length) {
    return res.status(200).json(cache.events);
  }

  const icsUrl = process.env.GOOGLE_CALENDAR_ICS_URL;
  if (!icsUrl) {
    return res.status(500).json({ error: 'Google Calendar iCal URL not configured' });
  }

  try {
    const response = await fetch(icsUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch iCal: ${response.status}`);
    }
    const icsText = await response.text();
    const data = ical.parseICS(icsText);

    const events = [];
    
    // Define window for recurrences (e.g., 3 months ago to 1 year ahead)
    const rangeStart = new Date();
    rangeStart.setMonth(rangeStart.getMonth() - 3);
    const rangeEnd = new Date();
    rangeEnd.setFullYear(rangeEnd.getFullYear() + 1);

    for (const key in data) {
      if (!data.hasOwnProperty(key)) continue;
      
      const ev = data[key];
      if (ev.type === 'VTIMEZONE') continue;
      if (ev.type !== 'VEVENT') continue;

      // Handle recurrent events
      if (typeof ev.rrule !== 'undefined') {
        // Find all occurrences within our date range
        const dates = ev.rrule.between(rangeStart, rangeEnd);
        
        if (dates.length > 0) {
          for (const i in dates) {
            const date = dates[i];
            let curEvent = ev;
            let showRecurrence = true;
            
            // Safely get start/end differences
            const originalStart = ev.start instanceof Date ? ev.start : new Date(ev.start);
            const originalEnd = ev.end instanceof Date ? ev.end : new Date(ev.end);
            let curDuration = originalEnd.getTime() - originalStart.getTime();
            
            let startDate = date;

            // Check for exceptions (exdate)
            // exdate keys are usually YYYY-MM-DD
            const dateKey = date.toISOString().substring(0, 10);
            if (ev.exdate && (ev.exdate[dateKey] || ev.exdate[date.toISOString()])) {
              showRecurrence = false;
            }

            // Check for modified recurrences (overrides)
            if (ev.recurrences) {
              if (ev.recurrences[date.toISOString()]) {
                curEvent = ev.recurrences[date.toISOString()];
                startDate = curEvent.start instanceof Date ? curEvent.start : new Date(curEvent.start);
                const eEnd = curEvent.end instanceof Date ? curEvent.end : new Date(curEvent.end);
                curDuration = eEnd.getTime() - startDate.getTime();
              } else if (ev.recurrences[dateKey]) {
                curEvent = ev.recurrences[dateKey];
                startDate = curEvent.start instanceof Date ? curEvent.start : new Date(curEvent.start);
                const eEnd = curEvent.end instanceof Date ? curEvent.end : new Date(curEvent.end);
                curDuration = eEnd.getTime() - startDate.getTime();
              }
            }

            if (showRecurrence) {
              const endDate = new Date(startDate.getTime() + curDuration);
              events.push({
                id: `${curEvent.uid || key}-${date.getTime()}`,
                summary: curEvent.summary || '',
                description: curEvent.description || '',
                location: curEvent.location || '',
                start: startDate.toISOString(),
                end: endDate.toISOString(),
                category: classifyEvent(curEvent.summary || '')
              });
            }
          }
        }
      } else {
        // Normal, non-recurrent event
        const start = ev.start instanceof Date ? ev.start : new Date(ev.start);
        const end = ev.end instanceof Date ? ev.end : new Date(ev.end);

        events.push({
          id: ev.uid || key,
          summary: ev.summary || '',
          description: ev.description || '',
          location: ev.location || '',
          start: start.toISOString(),
          end: end.toISOString(),
          category: classifyEvent(ev.summary || '')
        });
      }
    }

    // Update cache
    cache = { timestamp: now, events };
    return res.status(200).json(events);
  } catch (err) {
    console.error('Calendar fetch error:', err);
    return res.status(500).json({ error: err.message });
  }
}
