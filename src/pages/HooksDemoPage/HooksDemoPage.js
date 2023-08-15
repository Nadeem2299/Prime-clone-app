import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PaymentForm from './PaymentForm/PaymentForm';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';

const HooksDemoPage = () => {
  return (
    <>
      <Helmet>
        <title>Prime Video | Hooks demo</title>
      </Helmet>
      <div className="container">
        <div></div>
        <h1>HooksDemoPage</h1>
        <h2>useState Demo</h2>
        <Link className="fw-bold" to="blog">
          Blog
        </Link>
        <h2>My Account | Use state </h2>
        <Link className="fw-bold" to="my-account">
          My Account
        </Link>
        <hr />
        <h2>useEffect Demo</h2>
        <h2>useRef and useReducer Demo</h2>
        <TodosVariant1 />
        <TodosVariant2 />
        <h2>useId Demo</h2>
        <PaymentForm />
        <h2>useContext- will be explained in other component Demo</h2>
      </div>
    </>
  );
};

export default HooksDemoPage;
