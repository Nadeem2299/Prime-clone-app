import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

// Test Suite
describe('Conratulations', () => {
  it('has counter with default value 0', () => {
    render(<Counter />)
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0')
  });
  it('has properly working increment button', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0')

    // finding increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the clcik event on incrementBtn
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 1')

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 4')
  });

  it('it has counter with max value 10 upon increment', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0')

    // finding increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(counterValue.textContent).toBe('Counter Value: 10')
  })

  // test wether the component has properly working decrement button or not
  it('has properly working decrement button', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0')

    // finding increment button
    const decrementBtn = screen.getByTestId('decrementBtn');

    // trigger the clcik event on incrementBtn
    fireEvent.click(decrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 0')

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 0')
  });

  it('it has counter with max value 10 upon increment', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0')

    // finding increment button
    const decrementBtn = screen.getByTestId('decrementBtn');

    for (let i = 0; i < 10; i++) {
      fireEvent.click(decrementBtn);
    }

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    expect(counterValue.textContent).toBe('Counter Value: 0')
  })
})
