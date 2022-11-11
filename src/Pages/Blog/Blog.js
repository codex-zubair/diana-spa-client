import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {





    return (
        <div className='text-black' >

            <Helmet>
                <title>Diana-SPA Blog</title>
            </Helmet>

            <h1 className='text-4xl my-5 text-center'>Backend Important Question Answer:</h1>
            <div className="card bg-white my-5 text-center mx-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>A SQL Database follows a table like structure which can have an
                        unlimited number of rows and every data present inside the database
                        is properly structured with Predefined Schemas, it is basically used
                        to manipulate Relational Databases Management Systems.</p>
                    <p>

                        A NoSQL Database is a Distributed Database where the data is very
                        unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                        rows but it follows a Standard Schema Definition and can store all
                        sorts of data models with large distributed data in the form of
                        key-value pairs, graph databases, documents or wide-column stores.</p>
                </div>
            </div>
            <div className="card bg-white my-5 text-center mx-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>JWT it's JSON Web TOKEN  (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
                    <p>JWT Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
            </div>
            <div className="card bg-white my-5 text-center mx-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <p><strong>Javascript</strong> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                    <p><strong>NodeJS</strong> is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                </div>
            </div>
            <div className="card bg-white my-5 text-center mx-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue.</p>
                    <p>The Event Loop has one simple job — to monitor the Call Stack and the
                        Callback Queue or Message Queue.

                        If the Call Stack is empty, it will take the first event from the
                        Callback queue and will push it to the Call Stack, which effectively runs it.

                        Such an iteration is called a tick in the Event Loop.
                        Each event is just a function callback.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;