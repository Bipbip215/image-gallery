import React from 'react';


const withItemImage = (WrappedComponent) => {
    
    return class extends React.Component {

        state = {
            isDragEnter: false,
            isDragStart: false,
        }
        
        delItemClick = (id) => () => {
            const { removeImage } = this.props;
            removeImage(id);
        };

        editItemClick = (id) => () => {
            const { changeEditImage} = this.props;
            changeEditImage(id);
        };

        onChange = id => e => {
            e.preventDefault();
            const { changeCommentImage } = this.props;
            changeCommentImage(id, e.target.value);
        };

        cancelEntryClick = (id) => () => {
            const { changeEditImage, changeCommentImage, imageStore } = this.props;
            const { commentBeforeEdit } = imageStore.filter(item => item.id === id)[0];
            changeCommentImage(id, commentBeforeEdit);
            changeEditImage(id);
        };

        onModalClick = (id) => (e) => {
            e.preventDefault();
            const { changeModalImage } = this.props;
            changeModalImage(id);
        };

        dragStart = (id) => (e) => {
            this.setState({
                isDragStart: true,
            });
            const { changeDragImage } = this.props;
            changeDragImage(id);
        };
    
        dragEnter = () => (e) => {
            e.preventDefault();
            this.setState({
                isDragEnter: true
            })
        };
    
        dragDrop = (id) => (e) => {
            const { dragAndDropStore, executeDragAndDrop } = this.props;
            executeDragAndDrop(dragAndDropStore.dragId, id);
            this.setState({
                isDragEnter: false,
            })
        };
    
        dragOver = () => (e) => {
            e.preventDefault();
        };
    
        dragLeave = () => (e) => {
            this.setState({
                isDragEnter: false,
            });
        };

        dragEnd = () => (e) => {
            this.setState({
                isDragStart: false,
            });
        }
    
        render() {
            const { id, imageStore} = this.props;
            const { isEditing, comment, imageURL} = imageStore.filter(item => item.id === id)[0];
            return (
            <WrappedComponent {...this.props} 
                isEditing={isEditing}
                comment={comment}
                imageURL={imageURL}
                delItemClick={this.delItemClick}
                editItemClick={this.editItemClick}
                onChange={this.onChange}
                cancelEntryClick={this.cancelEntryClick}
                onModalClick={this.onModalClick}
                dragStart={this.dragStart}
                dragEnter={this.dragEnter}
                dragDrop={this.dragDrop}
                dragOver={this.dragOver}
                dragLeave={this.dragLeave}
                dragEnd={this.dragEnd}
                isDragEnter={this.state.isDragEnter}
                isDragStart={this.state.isDragStart} />
            )
        }
    }
};

export default withItemImage;