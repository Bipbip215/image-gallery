const addImage = (newImage) => ({
    type: 'ADD_IMAGE',
    payload: {
        newImage,
    }
});

const removeImage = (id) => ({
    type: 'REMOVE_IMAGE',
    payload: {
        id,
    }
});

const changeEditImage = (id) => ({
    type: 'CHANGE_EDIT_IMAGE',
    payload: {
        id,
    }
});

const changeCommentImage = (id, comment) => ({
    type: 'CHANGE_COMMENT_IMAGE',
    payload: {
        id,
        comment,
    }
});

const changeLoadStatus = () => ({
    type: 'CHANGE_LOAD_STATUS'
});

const changeModalImage = (id) => ({
    type: 'CHANGE_MODE_MODAL_IMAGE',
    payload: {
        id,
    }
});

const changeIdModalImage = (id) => ({
    type: 'CHANGE_ID_MODAL_IMAGE',
    payload: {
        id,
    }
});

const changeDragImage = (id) => ({
    type: 'CHANGE_DRAG_IMAGE',
    payload: {
        id,
    }
});

const executeDragAndDrop = (dragId, dropId) => ({
    type: 'DRAG_AND_DROP_IMAGE',
    payload: {
        dragId,
        dropId
    }
});

export {
    addImage,
    removeImage,
    changeEditImage,
    changeCommentImage,
    changeLoadStatus,
    changeModalImage,
    changeDragImage,
    executeDragAndDrop,
    changeIdModalImage
};