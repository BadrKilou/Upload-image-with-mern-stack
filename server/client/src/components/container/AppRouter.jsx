import React from 'react'
import Gallery from '../ClientData/Gallery';
import UploadForm from '../ClientData/UploadForm';
const AppRouter = () => {
    return (
        <div className='column'>
        <UploadForm />
        <Gallery />
        </div>
    )
}

export default AppRouter
