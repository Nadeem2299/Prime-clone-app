import { fireEvent, render, screen } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';

// Test Suite
describe('Conratulations', () => {
  it('has proper contact form with name, email, phone, query inputs and submit button', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const phoneInput = screen.getByLabelText('Phone');
    const queryInput = screen.getByLabelText('Query');
    // when i have 1 button this will work. for multiple buttons you have to use getAllByRole
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(queryInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });

  // positive test

  it('has enabled submit button when fullName is not empty', () => {
    render(<ContactUsPage />);
    // finding full name input
    const nameInput = screen.getByLabelText('Name');
    // finding submit button
    const submitBtn = screen.getByRole('button');
    const mockEventObject = {
      target: {
        value: 'abc'
      }
    }
    fireEvent.change(nameInput, mockEventObject);
    expect(submitBtn).not.toHaveAttribute('disabled');
  });

  // negative test related to form validation
  it('has disabled submit button when fullName is empty', () => {
    render(<ContactUsPage />);
    // finding full name input
    const nameInput = screen.getByLabelText('Name');
    // finding submit button
    const submitBtn = screen.getByRole('button');
    const mockEventObject = {
      target: {
        value: ''
      }
    }
    fireEvent.change(nameInput, mockEventObject);
    expect(submitBtn).toHaveAttribute('disabled');
  });
});
