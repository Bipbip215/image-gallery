import React from 'react';

import './FormImage.css';

const FormImage = ({ handleSubmit }) => {

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>URL image</label>
                <div>
                    <input name="imageURL" type="text" className="form-control" placeholder="Enter URL image" required/>
                </div>
            </div>
            <div className="form-group">
                <label >Comment</label>
                <textarea name="comment" type="text" className="form-control" placeholder="Enter comment" rows="3"/>
            </div>
            <button type="submit" className="btn btn-primary " label="submit">Submit</button>
        </form>
    );
}

export default FormImage;