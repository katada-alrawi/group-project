
import React from 'react'
import {Link} from "react-router-dom"

export default function PageNotFound() {
  
 
    return(<main className="grid min-h-[100vh] place-item-center px-8">
    <div className='text-center'>
      <p className='text-9xl font-semibold text- primary'>404</p>
      <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>Page not found</h1>
      <p className='mt-6 text-lg leading-7'>Sorry, we could not found the page you are looking for.</p>
      <div className='mt-10'>
        <Link to="/" className='btn btn-secondary'> Go Back Home</Link>

      </div>
    </div>
    </main>)
  }
 



