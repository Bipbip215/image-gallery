const loadImage = (state = false, action) => {
    switch (action.type) {
      case 'CHANGE_LOAD_STATUS': {
        return !state;
      }
      default:
          return state;
      }
};

export default loadImage;

