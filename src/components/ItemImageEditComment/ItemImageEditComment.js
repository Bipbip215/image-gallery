import React from 'react';

import './ItemImageEditComment.css';

const ItemImageEditComment = (props) => {

    const { comment, id, onChange, editItemClick, cancelEntryClick} = props;
    return(
        <div className="card-body">
            <textarea value={comment} name="comment" type="text" className="form-control" rows="2" onChange={onChange(id)}/>
            <button type="button" className="btn btn-info " onClick={editItemClick(id, comment)}  >
                <i className="fa fa-check-circle" />
            </button>
            <button type="button" className="btn btn-danger" onClick={cancelEntryClick(id)}>Cancel</button>
        </div> 
    );
};

export default ItemImageEditComment;