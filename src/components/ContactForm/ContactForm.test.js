import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import { sendContactEmail } from '../../services/contactEmail';

jest.mock('../../services/contactEmail', () => ({ sendContactEmail: jest.fn() }));

function submit() {
  fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'Test visitor' } });
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Message/), { target: { value: 'A test project' } });
  fireEvent.submit(screen.getByRole('button', { name: /Send message/ }).closest('form'));
}

afterEach(() => jest.clearAllMocks());

test('shows Sent and thank-you text only after the email service succeeds', async () => {
  sendContactEmail.mockResolvedValueOnce({ status: 200 });
  const { container } = render(<ContactForm />);
  submit();
  await screen.findByRole('button', { name: 'Sent ♡' });
  expect(screen.getByText("Thank you! I'll get back to you soon. ♡")).toBeTruthy();
  expect(container.querySelectorAll('.contact-success-hearts > span')).toHaveLength(6);
  expect(sendContactEmail).toHaveBeenCalledWith({ name: 'Test visitor', email: 'test@example.com', message: 'A test project' });
});

test('keeps the message and offers direct email when sending fails', async () => {
  const log = jest.spyOn(console, 'error').mockImplementation(() => {});
  sendContactEmail.mockRejectedValueOnce(new Error('Test error'));
  render(<ContactForm />);
  submit();
  await waitFor(() => expect(screen.getByText(/Oops, something went wrong/)).toBeTruthy());
  expect(screen.getByRole('link', { name: 'cvitalerrico@gmail.com' }).getAttribute('href')).toBe('mailto:cvitalerrico@gmail.com');
  expect(screen.getByLabelText(/Message/).value).toBe('A test project');
  expect(screen.queryByRole('button', { name: 'Sent ♡' })).toBeNull();
  log.mockRestore();
});
