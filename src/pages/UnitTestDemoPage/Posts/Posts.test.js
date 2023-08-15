import { render, screen } from '@testing-library/react';
import Posts from './Posts';
import { mockFetch } from './mocks/mockFetch';

// setting up mock for axios
// mocking a module with automocked version when needed

describe('Posts', () => {
  // setting up spy
  beforeEach(() => {
    // prepare to attach spy
    // identify whom should be spied
    // feeding with our data
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
    console.log('called');
  });

  // tearing down
  afterEach(() => {
    jest.resetAllMocks();
  });
  // test pec // test
  // test spec // test

  // setting up spy
  // prepare to atach spy
  // identify whom should be spied
  // feeding with our data

  // act and assert

  it('[SPYING]: renders posts properly', async () => {
    render(<Posts />);
    const postTitleElement = await screen.findByText(
      'leave first ball -- do not hit'
    );
    expect(postTitleElement).toBeInTheDocument();
  });

  // TODO: Try negative spec
});
