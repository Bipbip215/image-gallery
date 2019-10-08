import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import * as actions from '../../actions';
import withItemImage from '../../hocs/withItemImage';
import ItemImageDisplay from '../../components/ItemImageDisplay';
import ItemImageEditComment from '../../components/ItemImageEditComment';

import './ItemImage.css';

const mapStateToProps = ({ imageStore, dragAndDropStore }) => {
    return { imageStore, dragAndDropStore };
};

class ItemImage extends React.Component {

    render() {

        const { 
            isEditing, 
            comment, 
            imageURL, 
            id, 
            delItemClick, 
            editItemClick,
            onChange,
            cancelEntryClick,
            onModalClick,
            dragStart,
            dragEnter,
            dragDrop,
            dragOver,
            dragLeave,
            isDragEnter,
            isDragStart,
            dragEnd } = this.props;

        const divWrapClass = cn({
            'card': true,
            'card-dragEnter': isDragEnter,
            'card-dragStart': isDragStart
        });

        return(
            <div className={divWrapClass} >
                <img 
                    draggable="true" 
                    onDragStart={dragStart(id)} 
                    onDragEnter={dragEnter(id)} 
                    onDrop={dragDrop(id)} 
                    onDragOver={dragOver(id)} 
                    onDragLeave={dragLeave(id)}
                    onDragEnd={dragEnd(id)}
                    onClick={onModalClick(id)}
                    src={imageURL} 
                    className="card-img-top" 
                    alt="Скрин" />
                {
                    isEditing ? 
                        <ItemImageEditComment id={id} comment={comment} onChange={onChange} editItemClick={editItemClick} cancelEntryClick={cancelEntryClick} />:
                        <ItemImageDisplay id={id} comment={comment} editItemClick={editItemClick} delItemClick={delItemClick} />
                }
            </div>
        )
    }
};

export default connect(mapStateToProps, actions)(withItemImage(ItemImage));