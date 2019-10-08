import React from 'react';

import idGenerator from '../../utils/idGenerator';

const withFormAddImage = (WrappedComponent) => {
    
    return (props) => {
        const submit = async (e) => {
            e.preventDefault();
            e.persist();
            const { addImage, imageCheckService, changeLoadStatus } = props;
            await changeLoadStatus();
            const imageURL = e.target.imageURL.value;
            const comment = e.target.comment.value;
            const err = await imageCheckService.checkUrlImage(imageURL);
            if(err) {
                alert(err);
                changeLoadStatus();
                return;
            }
            const image = {imageURL, comment, id: idGenerator(), isEditing: false, commentBeforeEdit: comment};
            await addImage([image]);
            e.target.reset();
            changeLoadStatus();
          };

        return (<WrappedComponent {...props} handleSubmit={submit} />)
    }
};

export default withFormAddImage;