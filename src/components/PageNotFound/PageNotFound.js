import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='container mt-3'>
      <Helmet>
        <title>Prime Video | Page Not Found</title>
      </Helmet>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <p>Please open with the correct URL</p>
      <Link to='/'>Go back to home</Link>
    </div>
  )
}

export default ErrorPage
