import axios from 'axios';
import React, { useState } from 'react';
// import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  // Step 3 of React Context API: Let's receive the data suplied thru PageContext
  // const userStatus = useContext(PageContext);
  // console.log(userStatus);

  const [formState, setFormState] = useState({
    email: '',
    fullName: '',
    phone: '',
    query: '',
    isSaved: false,
    isSubmitting: false,
    isError: false
  });

  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    console.log('Submitted');
    event.preventDefault();
    console.log(formState);

    // submit form data to the REST API
    // what's the REST API URL?
    // whats the http method? POST
    // what's the REST API Client? axios
    // what's the form data? forState

    axios
      .post('https://jsonplaceholder.typicode.com/users', formState)
      .then((res) => {
        console.log(res);
        if (res && res.data) {
          setFormState({
            ...formState,
            isSubmitting: false,
            isSaved: true,
            isError: false
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setFormState({
          ...formState,
          isSubmitting: false,
          isSaved: false,
          isError: true
        });
      })
      .finally(() => {
        console.log('It is over!');
      });
  };
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  return (
    <>
      <h2>Contact Us</h2>
      <p>
        Logged In Status:{' '}
        {/* {userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'} */}
      </p>
      {/* <p>Last Login: {userStatus.lastLogin.toString()}</p> */}

      <div className="col-md-6">
        <h3>Controlled Components Demo in form input</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={formState.fullName}
              onChange={handleChange}
              name="fullName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={formState.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPhone"
              value={formState.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputQuery" className="form-label">
              Query
            </label>
            <textarea
              className="form-control"
              id="exampleInputQuery"
              value={formState.query}
              onChange={handleChange}
              name="query"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={formState.fullName === ''}
          >
            {formState.isSubmitting
              ? 'submitting... Please wait ...'
              : 'submit'}
          </button>
          {formState.isSaved && (
            <div className="alert alert-success">Saved Successfully</div>
          )}
          {formState.isError && (
            <div className="alert alert-danger">
              Sorry! Some error occured! Try again later!
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactUsPage;
