/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import { getPhoto } from '../../actions/clientAction';

const Gallery = ({ client: { photos, error, loading } , getPhoto }) => {
     
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
      getPhoto();
    }, [])



    return (
        <div className='photo-list'>
             {error && error.get_error && (
                <p className="errorMsg centered-message">{error.get_error}</p>
            )}
            {loading || photos == null ? (<h1>Loading ...</h1>) : (
            photos.map(photo => <Photo key={photo._id} id={photo._id} /> )
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    client: state.client,
})

export default connect(mapStateToProps, { getPhoto }) (Gallery)
