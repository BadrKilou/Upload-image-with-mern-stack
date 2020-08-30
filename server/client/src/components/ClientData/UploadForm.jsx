import React, { Fragment } from 'react'
import { useState } from 'react';
import { addPhoto } from '../../actions/clientAction';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRef } from 'react';

const UploadForm = ({ client: { error }, addPhoto }) => {
    const [photo, setPhoto] = useState(null);
    const [submitted, isSubmitted] = useState(false);
    const [errMsg, setErrorMsg] = useState(null);

      



    
    const formRef = useRef(null);

    useEffect(() => {
        setErrorMsg(error)
    }, [error])

    useEffect(() => {
        setErrorMsg('')
    }, []);



    const handleOnChange = (e) => {
     const file = e.target.files[0];
     setPhoto(file)
     console.log(file)
    }
     
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(photo) {
        addPhoto(photo)
        setPhoto('')
        isSubmitted(true)
        }      
    } 

  


  

  




    return (
        <div className='form-data'>
            <Fragment>
      {errMsg && errMsg.upload_error ? (
        <p className="errorMsg">{errMsg.upload_error}</p>
      ) :  
        (submitted && (
          <p className="successMsg">
            Photo uploaded successfully.
          </p>
        ))
      }    
            </Fragment>
            <form 
            onSubmit={handleFormSubmit}
            method="post"
            encType="multipart/form-data"
            ref={formRef}
            >
                        <div class="file-field input-field">
            <div class="btn">
            <span>File</span>
            <input type="file" multiple onChange={handleOnChange} />
            </div>
            <div class="file-path-wrapper">
            <input class="file-path validate" type="text"  placeholder="Upload one or more files" />
            </div>
        </div>
           
            <button
            variant="primary"
            type="submit"
            className={`${!photo ? 'disabled btn' : 'btn'}`}
            disabled={photo ? false : true}
            >
            Upload
            </button>
        </form>
            
        </div>
    )
}
const mapStateToProps = state => ({
    client: state.client
})

export default connect(mapStateToProps, { addPhoto }) (UploadForm)
