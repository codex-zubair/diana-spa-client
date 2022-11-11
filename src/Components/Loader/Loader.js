import React from 'react';
import { Hearts } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center'>
            <Hearts
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />

        </div>
    );
};

export default Loader;