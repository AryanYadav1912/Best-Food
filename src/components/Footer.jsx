import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            
          <div className='text-center p-3' style={{ backgroundColor: 'gray/700' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-dark' href='https://mdbootstrap.com/'>
              Aryan Yadav
            </a>
          </div>

        </MDBFooter>
        </div>
  )
}

export default Footer