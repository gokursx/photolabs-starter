import { useReducer, useEffect } from 'react';

const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
  // Add other actions as required
};

const initialState = {
  photos: [],
  topics: [],
  selectedPhoto: null,
  isModalVisible: false,
  favouritePhotos: [],
  // Add any other initial states as required
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
      };
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        isModalVisible: true,
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        isModalVisible: false,
        selectedPhoto: null,
      };
    case ACTIONS.UPDATE_FAV_PHOTO_IDS:
      return {
        ...state,
        favouritePhotos: action.payload,
      };
    // Add other cases based on your requirements
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(error => console.error("Error fetching topics data: ", error));
  }, []);

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  const updateToFavPhotoIds = (photoId) => {
    const isFavourite = state.favouritePhotos.includes(photoId);
    const updatedFavourites = isFavourite
      ? state.favouritePhotos.filter(id => id !== photoId)
      : [...state.favouritePhotos, photoId];

    dispatch({ type: ACTIONS.UPDATE_FAV_PHOTO_IDS, payload: updatedFavourites });
  };

  const onLoadTopic = (topicId) => {
    const filteredPhotos = state.photos.filter((photo) => photo.topicId === topicId);
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: filteredPhotos });
    // Add any other topic loading logic here, if necessary
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;

