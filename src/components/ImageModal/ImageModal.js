import React from 'react';

import withImageModal from '../../hocs/withImageModal';

import './ImageModal.css';

const ImageModal = (props) => {

    const { id, url, closeModalImage, nextImageClick, prevImageClick } = props;
    return(
        <React.Fragment>
        <img src={url} className="modal-img" alt="Скрин" />
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-info" onClick={prevImageClick(id)}>
                <i className="fa fa-arrow-left" />
            </button>
            <button type="button" className="btn btn-info" onClick={nextImageClick(id)}>
                <i className="fa fa-arrow-right" />
            </button>
        </div>
        <div className="modal-overlay" onClick={closeModalImage(id)}></div>
        </React.Fragment>
    )
};

export default withImageModal(ImageModal);