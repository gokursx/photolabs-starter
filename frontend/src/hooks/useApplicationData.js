import { useState } from "react";

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