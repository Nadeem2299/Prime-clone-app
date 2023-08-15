import { render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';

// setting up mock for axios
// mocking a module with automocked version when needed

jest.mock('axios');

// Test Suite
// the following is NOT RECCOMENDED-- This is know as anti-pattern
describe('Users', () => {
  // it('fetches userList via rest api call', async () => {
  //   render(<Users />);
  //   const nameElement = await screen.findByText(/Leanne Graham/);
  //   expect(nameElement).toBeInTheDocument();
  // });

  // 3 Disadvantages and challenges in testing api calls with above approach
  // 1. Time consuming
  // 2. Data inconsistency (no guarantee for sample data like Leanne Graham to be in database)
  // 3. Availability of rest api (may be down or it may be in dev)
  // Note: The above test spec should be removed

  // Positive Test Spec == Mocking succesful response

  it('[MOCKING]: fetches userList via rest api call', async () => {
    // 1. prepare mock response
    const mockResponse = {
      data: [
        {
          id: 1,
          name: 'Peter Parker',
          email: 'p@p.com'
        },
        {
          id: 2,
          name: 'Bruce Wayne',
          email: 'b@w.com'
        }
      ]
    };
    // 2. Resolve the http request with the above mock response
    // 2.1 setup mocks for axios (see before describe block)
    // 2.2 resolve the req
    axios.get.mockResolvedValue(mockResponse);

    // 3. Render the comp
    render(<Users />);
    // 4. Assert
    const nameElement = await screen.findByText('Peter Parker');
    expect(nameElement).toBeInTheDocument();
  });

  // Negative Test Spec == Mocking unsuccesful response
  it('[MOCKING]: renders error properly when REST API returns error', async () => {
    // 1. prepare mock error response
    const error = 'Error occurred';
    // 2. Reject the http request with the above mock error response
    // 2.1 setup mocks for axios (see before describe block)
    // 2.2 reject the req
    axios.get.mockRejectedValue(error);
    // 3. Render the comp
    render(<Users />);
    // 4. Assert
    const errorElement = await screen.findByText(
      'Some Error Occurred. Try again later!'
    );
    expect(errorElement).toBeInTheDocument();
  });
});
