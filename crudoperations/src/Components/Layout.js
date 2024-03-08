import React from 'react'
import ValidatedForm from './ValidatedForm'
import InfoContainer from './InfoContainer'

const Layout = () => {
  return (
    <div className='m-0 p-0 h-screen w-screen flex flex-col gap-y-10 justify-center items-center'>
          <ValidatedForm />
          <InfoContainer />
    </div>
  )
}

export default Layout