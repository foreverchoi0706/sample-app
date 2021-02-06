import api from './api';

const LOADING_IMAGES = 'LOADING_IMAGES';

const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';

const GET_IMAGES_ERROR = 'GET_IMAGES_ERROR';

const SEARCH_IMAGES_SUCCESS = 'SEARCH_IMAGE_SUCCESS';

const SEARCH_IMAGES_ERROR = 'SEARCH_IMAGE_ERROR';

const LOADING_RELEVANTS = 'LOADING_RELEVANTS';

const GET_RELEVANTS_SUCCESS = 'GET_RELEVANTS_SUCCESS';

const GET_RELEVANTS_ERROR = 'GET_RELEVANTS_ERROR';

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

export const getRelevants = (q) => (dispatch) => {
  dispatch({type: LOADING_RELEVANTS});
  api
    .searchImages(q)
    .then((data) => {
      dispatch({type: GET_RELEVANTS_SUCCESS, data});
    })
    .catch((error) => {
      dispatch({type: GET_RELEVANTS_ERROR, error});
    });
};

const initialState = {
  images: {
    isLoaded: false,
    data: null,
    error: null,
  },
  relevants: {
    isLoaded: false,
    data: null,
    error: null,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_IMAGES:
      return {
        ...state,
        images: {
          ...initialState.images,
          isLoaded: false,
        },
      };
    case GET_IMAGES_SUCCESS:
    case SEARCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: {
          ...initialState.images,
          isLoaded: true,
          data: action.data,
        },
      };
    case GET_IMAGES_ERROR:
    case SEARCH_IMAGES_ERROR:
      return {
        ...state,
        images: {
          ...initialState.images,
          isLoaded: true,
          error: action.error,
        },
      };
    case LOADING_RELEVANTS:
      return {
        ...state,
        relevants: {
          ...initialState.relevants,
          isLoaded: false,
        },
      };
    case GET_RELEVANTS_SUCCESS:
      return {
        ...state,
        relevants: {
          ...initialState.relevants,
          isLoaded: true,
          data: action.data,
        },
      };
    case GET_RELEVANTS_ERROR:
      return {
        ...state,
        relevants: {
          ...initialState.relevants,
          isLoaded: true,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
export default reducer;
