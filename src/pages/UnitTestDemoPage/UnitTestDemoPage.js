import React from 'react'
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const UnitTestDemo = () => {
  return (
    <>
      <h1>UnitTestDemo</h1>
      <CompanyInfo foundedYear="1994" headQuarters="Teaneck, New Jersey, U.S."/>
      <hr/>
      <Counter />
      <hr/>
      <h3>For testing forms refer: ContactUs.js and ContactUs.test.js</h3>
      <hr />
      <Users />
      <Posts />
    </>
  )
}

export default UnitTestDemo
