import React from 'react';

const withImageModal = (WrappedComponent) => {
    
    return (props) => {

        const { id, imageStore, changeModalImage, changeIdModalImage } = props;

        const url = imageStore.filter((item) => item.id === id )[0].imageURL;

        const closeModalImage = (id) => (e) => {
            e.preventDefault();
            changeModalImage(id);
        }

        const nextImageClick = (id) => (e) => {
            e.preventDefault();
            const itemIndex = imageStore.findIndex((item) => item.id === id );
            if(itemIndex + 1 === imageStore.length) {
                changeIdModalImage(imageStore[0].id);
                return;
            }
            changeIdModalImage(imageStore[itemIndex + 1].id)
        };

        const prevImageClick = (id) => (e) => {
            e.preventDefault();
            const itemIndex = imageStore.findIndex((item) => item.id === id );
            if(itemIndex === 0) {
                changeIdModalImage(imageStore[imageStore.length - 1].id);
                return;
            }
            changeIdModalImage(imageStore[itemIndex - 1].id)
        }

        return (<WrappedComponent {...props} url={url} nextImageClick={nextImageClick} prevImageClick={prevImageClick} closeModalImage={closeModalImage} />)
    }
};

export default withImageModal;