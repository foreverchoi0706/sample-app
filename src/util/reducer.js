import api from './api';

const LOADING_IMAGES = 'LOADING_IMAGES';

const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';

const GET_IMAGES_ERROR = 'GET_IMAGES_ERROR';

const SEARCH_IMAGES_SUCCESS = 'SEARCH_IMAGE_SUCCESS';

const SEARCH_IMAGES_ERROR = 'SEARCH_IMAGE_ERROR';

export const getImages = () => (dispatch) => {
  dispatch({type: LOADING_IMAGES});
  api
    .getImages()
    .then((data) => {
      dispatch({type: GET_IMAGES_SUCCESS, data});
    })
    .catch((error) => {
      dispatch({type: GET_IMAGES_ERROR, error});
    });
};

export const searchImages = (q) => (dispatch) => {
  dispatch({type: LOADING_IMAGES});
  api
    .searchImages(q)
    .then((data) => {
      dispatch({type: SEARCH_IMAGES_SUCCESS, data});
    })
    .catch((error) => {
      dispatch({type: SEARCH_IMAGES_ERROR, error});
    });
};

const initialState = {
  images: {
    isLoaded: false,
    data: null,
    error: null,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_IMAGES:
      return {
        images: {
          ...initialState.images,
          isLoaded: false,
        },
      };
    case GET_IMAGES_SUCCESS:
    case SEARCH_IMAGES_SUCCESS:
      return {
        images: {
          ...initialState.images,
          isLoaded: true,
          data: action.data,
        },
      };
    case GET_IMAGES_ERROR:
    case SEARCH_IMAGES_ERROR:
      return {
        images: {
          ...initialState.images,
          isLoaded: true,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
export default reducer;
