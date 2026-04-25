import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div>
      404 Page Not Found
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default PageNotFound
