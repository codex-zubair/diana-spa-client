import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-black'>

                        <Helmet>
                            <title>Diana-SPA 404!</title>
                        </Helmet>
              
                        <div className=' bg-red-400'>
                            <h1 className='my-96 text-5xl'>No Page Found! 404!</h1>
                        </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;