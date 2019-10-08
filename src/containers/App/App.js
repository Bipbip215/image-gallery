import React from 'react';
import { connect } from 'react-redux';

import FormAddImage from '../FormAddImage';
import ListImage from '../ImageList';
import ImageModal from '../../components/ImageModal';
import { changeModalImage, addImage, changeIdModalImage } from '../../actions';

import './App.css';

const mapStateToProps = ({ modalImageStore, imageStore }) => {
    return { modalImageStore, imageStore };
};

const actions = { changeModalImage, addImage, changeIdModalImage };

class App extends React.Component { 

    componentDidMount(){
        const { addImage } = this.props;
        const localImageStore = JSON.parse(localStorage.getItem('imageStore'));
        if( localImageStore ) {
            addImage(localImageStore.map((image) => {
                const { imageURL, comment, id } = image;
                return {imageURL, comment, id, isEditing: false, commentBeforeEdit: comment };
            }));
        }
    }

    render() {
        const { modalImageStore, changeModalImage, imageStore, changeIdModalImage} = this.props;
        const { isModal, id} = modalImageStore;

        return (
            <div>
                <FormAddImage />
                <ListImage />
                    {isModal ? 
                    <ImageModal 
                        id={id} 
                        changeModalImage={changeModalImage} 
                        imageStore={imageStore} 
                        changeIdModalImage={changeIdModalImage} /> 
                    : null}
            </div>
        )
    }
};
export default connect(mapStateToProps, actions)(App);