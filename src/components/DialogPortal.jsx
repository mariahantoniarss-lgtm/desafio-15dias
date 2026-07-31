import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * DialogPortal renders its children in a React portal attached to document.body.
 * It provides an overlay that covers the full viewport, handles focus trapping,
 * close on Escape, click outside, and restores body scroll when unmounted.
 *
 * Props:
 * - isOpen: boolean – controls visibility.
 * - onClose: () => void – called when the dialog should close.
 * - titleId: string – id of the element that labels the dialog (aria-labelledby).
 * - children: ReactNode – dialog content.
 */
const DialogPortal = ({ isOpen, onClose, titleId, children }) => {
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Focus management: focus first focusable element when opened
  useEffect(() => {
    if (!isOpen) return;
    const focusable = dialogRef.current?.querySelectorAll('button, [tabindex="0"]');
    if (focusable && focusable.length) {
      focusable[0].focus();
    } else if (dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  // Focus trap
  const handleTab = (e) => {
    if (e.key !== 'Tab') return;
    const focusableEls = dialogRef.current?.querySelectorAll('button, [tabindex="0"]');
    if (!focusableEls || focusableEls.length === 0) return;
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      if (document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="dialog-overlay"
      ref={overlayRef}
      onClick={onClose}
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(74, 26, 36, 0.65)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="dialog-box"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleTab}
        tabIndex={-1}
        style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          maxWidth: '520px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: '28px 22px',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(74, 26, 36, 0.3)',
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default DialogPortal;
