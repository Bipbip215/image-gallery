import React from 'react';

import './errorMessage.css';
import icon from './Error.png';

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <img src={icon} alt="error"></img>
            <div>
                something has gone terribly wrong
            </div>
            <div>
                (but we already sent droids to fix it)
            </div>
        </div>
    );
};

export default ErrorMessage;