import { combineReducers } from 'redux';

import imageStore from './imageStore';
import loadImage from './loadImage';
import modalImageStore from './modalImageStore';
import dragAndDropStore from './dragAndDropStore';



const reducers = combineReducers({
  imageStore,
  loadImage,
  modalImageStore,
  dragAndDropStore
});

export default reducers;