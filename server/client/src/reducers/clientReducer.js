import {
    ADD_PHOTO,
    GET_PHOTO,
    ERROR_PHOTO,
    SET_LOADING
} from '../actions/types';


const initialState = {
    loading: null,
    photos: null,
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_PHOTO:
            console.log(action.payload)
            return{
                ...state,
                photos: [...state.photos, action.payload],
                loading: false
            }
        case GET_PHOTO:
            return{
                ...state,
                photos: action.payload,
                loading: false
            }
        case ERROR_PHOTO:
            return{
                ...state,
                error: action.payload
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        default: 
        return state;
    }
}
