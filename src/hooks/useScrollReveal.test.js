import React, { useRef } from 'react';
import { act, render } from '@testing-library/react';
import useScrollReveal from './useScrollReveal';

function Example() {
  const root = useRef(null);
  useScrollReveal(root);
  return <main ref={root}><h2>Selected projects</h2></main>;
}

let preference;
let changePreference;
let observer;
let intersect;

beforeEach(() => {
  preference = {
    matches: false,
    addEventListener: jest.fn((event, callback) => { changePreference = callback; }),
    removeEventListener: jest.fn(),
  };
  window.matchMedia = jest.fn(() => preference);
  observer = { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() };
  window.IntersectionObserver = jest.fn(callback => {
    intersect = callback;
    return observer;
  });
});

test('keeps content visible without observing when reduced motion is enabled', () => {
  preference.matches = true;
  const { getByRole } = render(<Example />);
  expect(getByRole('heading').classList.contains('scroll-reveal')).toBe(false);
  expect(window.IntersectionObserver).not.toHaveBeenCalled();
});

test('reveals and stops observing an element after its first intersection', () => {
  const { getByRole } = render(<Example />);
  const heading = getByRole('heading');
  act(() => intersect([{ isIntersecting: true, target: heading }]));
  expect(heading.classList.contains('is-revealed')).toBe(true);
  expect(observer.unobserve).toHaveBeenCalledWith(heading);
});

test('shows pending content and disconnects when reduced motion is enabled later', () => {
  const { getByRole, unmount } = render(<Example />);
  preference.matches = true;
  act(() => changePreference());
  expect(getByRole('heading').classList.contains('is-revealed')).toBe(true);
  expect(observer.disconnect).toHaveBeenCalled();
  unmount();
  expect(preference.removeEventListener).toHaveBeenCalledWith('change', changePreference);
});
