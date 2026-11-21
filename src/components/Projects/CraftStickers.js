import React from 'react';

const crafts = [
  { label: 'Brand identity', icon: <><path d="m5 17 1-5L17 2l5 5-11 11-6 1Z" /><path d="m14 5 5 5M6 12l5 5M5 19l-2 2" /></> },
  { label: 'Web design', icon: <><path d="m8 5-6 7 6 7m8-14 6 7-6 7M14 3l-4 18" /></> },
  { label: 'Shopify stores', icon: <><path d="M5 8 3 21h18L19 8H5Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3" /></> },
  { label: 'Product photography', icon: <><path d="M3 7h5l2-3h5l2 3h4v14H3Z" /><circle cx="12" cy="14" r="4" /><path d="M18 10h1" /></> },
];

export default function CraftStickers() {
  return <div className="craft-sticker-group">
    <div className="craft-note" aria-hidden="true">what I do ♡
      <svg viewBox="0 0 110 70" fill="none"><path d="M5 8C85-5 85 38 35 44S-20 43-27 78m-9-12 9 13 13-8" /></svg>
    </div>
    <div className="craft-stickers" aria-label="What I do">
      {crafts.map(({ label, icon }, index) => <span className="craft-sticker" key={label}>
        {index === 2 && <svg className="craft-bakery-edge" viewBox="0 0 260 76" preserveAspectRatio="none" aria-hidden="true"><path d="M5 18Q5 5 18 9Q32 19 46 9T74 9T102 9T130 9T158 9T186 9T214 9Q231 17 242 9Q255 5 255 18V58Q255 71 242 71H18Q5 71 5 58Z" /></svg>}
        <svg className="craft-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">{icon}</svg>
        <span>{label}</span>
      </span>)}
    </div>
  </div>;
}
