/*
  1. How to write test cases? Test Pattern AAA (Arrange, Act, Assert)
  2. Where to write test cases? (here)
  3. How to test the app by tools? (tools are configuired . 'try npn run test')
*/

// Arrange
// Importing the necessary tools
// import { render, screen } from '@testing-library/react';
import App from './App'; // sample taken for testing

// test case a.k.a. test spec --- or test
/*
test('App comp should have Success text', () => {
  // Act
  // writing the logic to test watever the app comp has success text or not
  render(<App />); // rendering into container -- document.body
  const successText = screen.getByText('Success!'); // DOM Querying
  // Assert (Must)
  expect(successText).toBeInTheDocument();
});

it('App comp should have Login', () => {
  render(<App />);
  const loginText = screen.getByText('Login');
  // Assert
  expect(loginText).toBeInTheDocument();
});
*/
it('has proper App Component', () => {
  // Act (optional)
  // assert is mandatory
  expect(App).toBeTruthy();
});

/*
  * test, it, expect are from JEST
  * render, screen are from RTL.
  * toBeTruthy, toBeInTheDocument are from jest-dom
*/
