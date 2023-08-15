import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  console.log('program started');
  const [accountName, setAccountName] = useState('Kareena Kapoor');
  const [age, setAge] = useState(30);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  console.log(age);
  console.log(setAge);

  console.log(accountName);
  console.log(setAccountName);

  const handleChangeAccountName = () => {
    console.log('Inside handleChangeAccountName');
    setAccountName('Katreena Kaif');
    console.log(accountName)
  };

  console.log('program ended');

  return (
    <div className='container mt-5'>
      <Link className='fw-bold' to="/hooks-demo">Go Back</Link>
      <p>Account name: {accountName}</p>
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={handleChangeAccountName}
      >
        Change Account Name
      </button>
      <p>Age: {age}</p>
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => {
          setAge(40);
        }}
      >
        Change Age
      </button>
      <hr />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? 'Log In' : 'Log Out'}
      </button>
    </div>
  );
};

export default MyAccount;
