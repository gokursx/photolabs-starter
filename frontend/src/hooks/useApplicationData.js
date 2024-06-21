import { useReducer } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {
  isModalVisible: false,
  selectedPhoto: null,
  favPhotoIds: [],
  topics: []
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to handle photo selection
  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  // Function to update favorite photo IDs
  const updateToFavPhotoIds = (id) => {
    if (state.favPhotoIds.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    }
  };

  // Function to load topics
  const onLoadTopic = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  // Function to close the photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        if (state.favPhotoIds.includes(action.payload.id)) {
          return state; // No need to update, the photo ID is already in the favorites
        }
        return { 
          ...state,
          favPhotoIds: [...state.favPhotoIds, action.payload.id]
        };
        
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state,
          favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload.id)
        };
  
      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          selectedPhoto: action.payload.photo,
          isModalVisible: true
        };
  
      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topics: action.payload.topics
        };
  
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          selectedPhoto: action.payload.photo,
          isModalVisible: true
        };
  
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {
          ...state,
          isModalVisible: false,
          selectedPhoto: null
        };
  
      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  }

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;