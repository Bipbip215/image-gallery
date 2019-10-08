const modalImageStore = (state = { isModal: false, id:'' }, action) => {
    switch (action.type) {
      case 'CHANGE_MODE_MODAL_IMAGE': {
        const { id } = action.payload;
        return {isModal: !state.isModal, id};
      };
      case 'CHANGE_ID_MODAL_IMAGE': {
        const { id } = action.payload;
        return {isModal: true, id};
      }
      default:
          return state;
      }
};

export default modalImageStore;