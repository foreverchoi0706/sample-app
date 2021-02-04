import api from './api';

const GET_IMAGES = 'GET_IMAGES';

const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';

const GET_IMAGES_ERROR = 'GET_IMAGES_ERROR';

export const getImages = () => (dispatch) => {
  dispatch({type: GET_IMAGES});
  api
    .getImages()
    .then((data) => {
      dispatch({type: GET_IMAGES_SUCCESS, data});
    })
    .catch((error) => {
      dispatch({type: GET_IMAGES_ERROR, error});
    });
};

const initialState = {
  getImages: {
    isLoaded: false,
    data: null,
    error: null,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        getImages: {
          ...initialState.getImages,
          isLoaded: false,
        },
      };
    case GET_IMAGES_SUCCESS:
      return {
        getImages: {
          ...initialState.getImages,
          isLoaded: true,
          data: action.data,
        },
      };
    case GET_IMAGES_ERROR:
      return {
        getImages: {
          ...initialState.getImages,
          isLoaded: true,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
export default reducer;
