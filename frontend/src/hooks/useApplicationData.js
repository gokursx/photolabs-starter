import { useReducer, useEffect } from 'react';

const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
  UPDATE_FAV_PHOTO_IDS: "UPDATE_FAV_PHOTO_IDS"
};

const initialState = {
  photos: [],
  topics: [],
  selectedPhoto: null,
  isModalVisible: false,
  favouritePhotos: [],
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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Promise.all([
      fetch("/api/photos").then(response => response.json()),
      fetch("/api/topics").then(response => response.json())
    ])
    .then(([photoData, topicData]) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
    })
    .catch(error => console.error("Error fetching data: ", error));
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
    fetch(`/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(topicPhotos => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: topicPhotos });
      }); 
  };

  // const getPhotos = function() {
  //   fetch('api/photos')
  // }
  

  return {
    state,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    onLoadTopic,
  };
};

export default useApplicationData;

