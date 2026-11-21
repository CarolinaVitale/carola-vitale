import React from 'react';

// Original wordmark letter positions preserve the illustrated lettering exactly.
const letters = [
  {
    "x": 0,
    "y": 123,
    "width": 626,
    "height": 936
  },
  {
    "x": 562,
    "y": 140,
    "width": 609,
    "height": 886
  },
  {
    "x": 1173,
    "y": 38,
    "width": 565,
    "height": 936
  },
  {
    "x": 1678,
    "y": 8,
    "width": 536,
    "height": 866
  },
  {
    "x": 2249,
    "y": 52,
    "width": 347,
    "height": 804
  },
  {
    "x": 2615,
    "y": 0,
    "width": 586,
    "height": 851
  },
  {
    "x": 26,
    "y": 1087,
    "width": 617,
    "height": 853
  },
  {
    "x": 656,
    "y": 1136,
    "width": 204,
    "height": 746
  },
  {
    "x": 892,
    "y": 1024,
    "width": 508,
    "height": 822
  },
  {
    "x": 1335,
    "y": 973,
    "width": 629,
    "height": 870
  },
  {
    "x": 1984,
    "y": 940,
    "width": 362,
    "height": 810
  },
  {
    "x": 2380,
    "y": 892,
    "width": 404,
    "height": 889
  }
];

export default function AnimatedWordmark() {
  return <h1 aria-label="Carola Vitale">
    <span className="hero-wordmark" aria-hidden="true">
      {letters.map((letter, index) => <span
        className="hero-letter"
        key={index}
        style={{
          left: `${letter.x / 3201 * 100}%`,
          top: `${letter.y / 1940 * 100}%`,
          width: `${letter.width / 3201 * 100}%`,
          height: `${letter.height / 1940 * 100}%`,
          '--letter-delay': `${index * 50}ms`,
        }}
      ><img src={`/brand/wordmark-letters/${index}.png`} alt="" width={letter.width} height={letter.height} fetchpriority="high" /></span>)}
    </span>
  </h1>;
}
