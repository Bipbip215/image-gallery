const dragAndDropStore = (state = { dragId: ''}, action) => {
    switch (action.type) {
      case 'CHANGE_DRAG_IMAGE': {
        const { id } = action.payload;
        return {...state, dragId: id };
      };
      default:
          return state;
      }
}

export default dragAndDropStore;