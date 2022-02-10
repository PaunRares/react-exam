import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1 className='mt-5'>Error 404</h1>
        <h2>Page not found...</h2>
        <Link to="/">
            <button className="btn btn-secondary">Inapoi la home</button>
        </Link>
    </div>
  )
}

export default Page404