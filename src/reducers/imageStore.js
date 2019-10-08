const imageStore = (state = [], action) => {
    switch (action.type) {
      case 'ADD_IMAGE': {
        const { newImage } = action.payload;
        return [...state, ...newImage];
      }
      case 'REMOVE_IMAGE': {
        const { id } = action.payload
        return state.filter(i => i.id !== id);
      }
      case 'CHANGE_EDIT_IMAGE': {
        const itemIndex = state.findIndex(({id}) => id === action.payload.id);
        let item = state[itemIndex];
        const { isEditing, comment } = item;
        item = {...item, isEditing: !isEditing, commentBeforeEdit: comment};
        return [...state.slice(0, itemIndex), item, ...state.slice(itemIndex + 1)];
      }
      case 'CHANGE_COMMENT_IMAGE': {
        const itemIndex = state.findIndex(({id}) => id === action.payload.id);
        let item = state[itemIndex];
        item = {...item, comment: action.payload.comment};
        return [...state.slice(0, itemIndex), item, ...state.slice(itemIndex + 1)];
      };
      case 'DRAG_AND_DROP_IMAGE': {
        const itemDragIndex = state.findIndex(({id}) => id === action.payload.dragId);
        const itemDropIndex = state.findIndex(({id}) => id === action.payload.dropId);
        [state[itemDragIndex], state[itemDropIndex]] = [state[itemDropIndex], state[itemDragIndex]];
        return [...state];
      }
      default:
        return state;
    }
};

export default imageStore;