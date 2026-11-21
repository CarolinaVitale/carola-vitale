import React from 'react';
import './BrandIcon.css';

export default function BrandIcon({ name }) {
  return <img className="brand-icon" src={`/brand/icons/${name}.svg`} alt="" aria-hidden="true" width="18" height="18" />;
}
