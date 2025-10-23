import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export default function NotFoundPage() {
  return (
    <div className="bg-dark text-light vh-100  text-center d-flex flex-column gap-3 align-items-center justify-content-center">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      
      <h1>404 - Page Not Found</h1>
      <p className='text-decoration-underline '>
        <Link to={"/"}>/Əsas Səhifə</Link>
      </p>
    </div>
  );
}
