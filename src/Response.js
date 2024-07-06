import React from 'react';

const Response = ({ responseContent }) => {
    return (
        <div className="response-display">
            {/* <h2>Generated Article</h2> */}
            <p>{responseContent}</p>
        </div>
    );
};

export default Response;