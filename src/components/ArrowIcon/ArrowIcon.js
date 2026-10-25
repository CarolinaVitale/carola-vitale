import React from 'react';

export default function ArrowIcon({ direction = 'right' }) {
  const rotation = { right: 0, down: 90, upRight: -45 }[direction] || 0;
  return (
    <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <g transform={`rotate(${rotation} 12 12)`} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16M14 6l6 6-6 6" />
      </g>
    </svg>
  );
}
