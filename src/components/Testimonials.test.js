import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import Testimonials from './Testimonials';

beforeEach(() => {
  jest.useFakeTimers();
  window.matchMedia = jest.fn(() => ({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() }));
});
afterEach(() => { jest.clearAllTimers(); jest.useRealTimers(); });
const tick = () => { act(() => jest.advanceTimersByTime(6000)); act(() => jest.advanceTimersByTime(160)); };

test('rotates every six seconds and pauses while hovered', () => {
  render(<Testimonials />);
  expect(screen.getByText('— Rebeca Gonzalez')).toBeTruthy();
  tick();
  expect(screen.getByText('— Miguel Bravo')).toBeTruthy();
  fireEvent.mouseEnter(screen.getByRole('region'));
  tick();
  expect(screen.getByText('— Miguel Bravo')).toBeTruthy();
});

test('reduced motion disables rotation and switches directly using the stickers', () => {
  window.matchMedia.mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });
  render(<Testimonials />);
  tick();
  expect(screen.getByText('— Rebeca Gonzalez')).toBeTruthy();
  fireEvent.click(screen.getByRole('button', { name: 'Vicky' }));
  expect(screen.getByText('— Vicky De Palma')).toBeTruthy();
});
