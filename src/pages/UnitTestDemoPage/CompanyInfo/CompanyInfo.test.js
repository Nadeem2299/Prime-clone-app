/* eslint-disable react/no-unknown-property */
// test patter: AAA

// Arrange
import { fireEvent, render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';
import renderer from 'react-test-renderer';

// TEST SUITE = group of related tests

describe('CompanyInfo', () => {
  // let's write the tests / test cases / test specs
  it('has company Info text', () => {
    render(<CompanyInfo />);
    const CompanyInfoText = screen.getByText(/Company Info/i);

    expect(CompanyInfoText).toBeInTheDocument();
  });

  it('should have Cognizant as company name', () => {
    render(<CompanyInfo />);
    // screen.getByText('Company Name: Cognizant');

    const companyName = screen.getByTestId('companyName');
    // console.log(companyName.testContent);
    expect(companyName.textContent).toBe('Company Name: Cognizant');
  });

  // Testing props
  it('receives foundedYear and headQuraters props and displays in JSX', () => {
    render(<CompanyInfo foundedYear="1994" headQuarters="Teaneck, New Jersey, U.S."/>);
    const foundedYear = screen.getByTestId('foundedYear');
    expect(foundedYear).toHaveTextContent('Founded Year: 1994');

    const headQuarters = screen.getByTestId('headQuarters');
    expect(headQuarters).toHaveTextContent('Headquarters: Teaneck, New Jersey, U.S.');
  });
  // testing inline styles --- must be in 1 place in capstone project
  it('has FoundedYear text in #ff0000 color -- inline styles', () => {
    render(<CompanyInfo foundedYear="1994"/>);
    const foundedYear = screen.getByTestId('foundedYear');
    expect(foundedYear).toHaveStyle('color: #ff0000')
  })

  it('button should have the class btn-primary and should have text JOIN COGNIZANT', () => {
    render(<CompanyInfo foundedYear="1994" headQuarters="Teaneck, New Jersey, U.S."/>);
    const cognizantBtn = screen.getByTestId('cognizantBtn');
    expect(cognizantBtn).toHaveTextContent('JOIN COGNIZANT');
    expect(cognizantBtn).toHaveClass('btn-primary');
  });
  // testing external css -- TODO

  // testing to find out the input has the right placeholder
  it('has an input with Enter your Country Name as placeholder', () => {
    render(<CompanyInfo />)
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    expect(countryInput).toBeTruthy();
  })

  // Testing states and events
  it('displays countryName USA by default and updates JSX onChange of country input', () => {
    render(<CompanyInfo />);
    // finding input element
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    expect(countryInput.value).toBe('USA');

    // creating mock event object
    const mockEvent = {
      target: {
        value: 'INDIA'
      }
    }

    // now checking wheather the onChange event handler is working or not
    // as the comp is rendered in test runner, we can't use mouse or keyboard as input device
    // so let's trigger the event thru program

    fireEvent.change(countryInput, mockEvent);
    expect(countryInput.value).toBe('INDIA');
    expect(screen.getByTestId('visitWebsite')).toHaveTextContent('Please visit Cognizant UK website')
  });

  // TODO:testing states and events-- with a button

  // snapshot Testing
  it('has right snapshot with all requirements completed', () => {
    // take a snapshot using test-renderer
    // taking snapshot and converting into json
    // take snapshot with all possible props awa prop children
    const snapshotInJson = renderer.create(<CompanyInfo foundedYear="1994" headQuarters="Teaneck, New Jersey, U.S." />).toJSON();
    // let's assert with toMatchSnapshot()
    expect(snapshotInJson).toMatchSnapshot();
  });
});
