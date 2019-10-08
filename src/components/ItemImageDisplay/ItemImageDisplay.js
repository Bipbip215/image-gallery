import React from 'react';

import './ItemImageDisplay.css';

const ItemImageDisplay = (props) => {

    const { comment, id, editItemClick, delItemClick} = props;
    return (
        <div className="card-body">
            <p className="card-text">{comment}</p>
            <button type="button" className="btn btn-info " onClick={editItemClick(id)} >
                <i className="fa fa-edit" />
            </button>
            <button type="button" className="btn btn-danger" onClick={delItemClick(id)}>
                <i className="fa fa-trash-o" />
            </button>
        </div>
    );
};

export default ItemImageDisplay;