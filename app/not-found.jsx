import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className="text-center">
        <div className=" flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center border-red-200 border-2">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Oops! Page Not Found yoo!</h2>
          <p className="text-red-500">Check you got the correct link bro!</p>
          <Link href={"/"}>
          <button className="mt-5 px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700 focus:outline-none">Go Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound