import React from 'react';
import { ImageCheckServiceConsumer } from '../../contexts/imageCheckServiceContext';

const withImageCheckService = (Component) => {
    
    return (props) => {
        return (
            <ImageCheckServiceConsumer>
                {
                    (imageCheckService) => {
                        return (<Component {...props} imageCheckService={imageCheckService} />)
                    }
                }
            </ImageCheckServiceConsumer>
        );
    }
};

export default withImageCheckService;