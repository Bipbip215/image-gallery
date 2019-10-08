import React from 'react';
import { connect } from 'react-redux';

import ItemImage from '../ItemImage';

import './ListImage.css';

const mapStateToProps = ({ imageStore }) => {
    return { imageStore };
};

class ListImage extends React.Component {

    componentDidUpdate() {
        const { imageStore } = this.props;
        if(imageStore.length === 0) {
            localStorage.removeItem('imageStore');
            return;
        };
        const localImageStore = imageStore.map((image) => {
            const { imageURL, comment, id} = image;
            return {imageURL, comment, id};
         })
        const store = JSON.stringify(localImageStore);
        localStorage.setItem('imageStore', store);
    };
    
    render() {
        const { imageStore } = this.props;

        return (
            <div className='container-img'>
                {imageStore.map(item => {
                    const { id } = item;
                    return (
                        <ItemImage id={id} key={id}/>
                    )
                })}
            </div>
        )
    }
};

export default connect(mapStateToProps)(ListImage);