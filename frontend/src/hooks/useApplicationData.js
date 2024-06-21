import { useState } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return { /* insert logic */ }
    { /* insert all relevant actions as case statements*/ }  
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, setState] = useState({
    isModalVisible: false,
    selectedPhoto: null,
    favPhotoIds: [],
    topics: []
  });

  // Function to handle photo selection
  const onPhotoSelect = (photo) => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: photo,
      isModalVisible: true
    }));
  };

  // Function to update favorite photo IDs
  const updateToFavPhotoIds = (id) => {
    setState((prev) => {
      if (prev.favPhotoIds.includes(id)) {
        return prev; // No need to update, the photo ID is already in the favorites
      }
      return { 
        ...prev,
        favPhotoIds: [...prev.favPhotoIds, id]
      };
    });
  };

  // Function to load topics
  const onLoadTopic = (topics) => {
    setState((prev) => ({
      ...prev,
      topics
    }));
  };

  // Function to close the photo details modal
  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({
      ...prev,
      isModalVisible: false,
      selectedPhoto: null
    }));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;