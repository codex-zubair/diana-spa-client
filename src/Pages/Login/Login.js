
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthUserContext } from '../../Context/UserContext';
import { Helmet } from 'react-helmet-async';
import Loader from '../../Components/Loader/Loader';
import Gallery from '../../Components/Gallery/Gallery';



const Login = () => {





    // Getting location system.
    const location = useLocation();

    // Getting Location.
    const from = location.state?.from?.pathname || '/';


    // navigate system 
    const navigate = useNavigate();




    // taking values from User Context.
    const { loginByEmail, signUpByGoogle } = useContext(AuthUserContext);



    // Loader for heart
    const [load, setLoad] = useState(false);



    const onSubmitHandler = (event) => {


        // Stop Loading on submit 
        event.preventDefault();

        // full form
        const form = event.target;


    

        // Form Values Start
        const email = form.email.value;
        const password = form.password.value;
        // Form Values End





        //!Login by Email 
        loginByEmail(email, password)
            .then((result) => {
                const user = result.user;
                setLoad(true);
                // Getting jwt Token from jwt provider
                fetch('https://diana-spa-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email: user?.email })





                })
                    // Storing the jwt token into local storage
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('spa-token', data.token);
                        navigateNow()

                    })
                    .catch(error => {
                        console.error(error.message)
                        setLoad(false)
                    })

            })
            .catch(error => {
                console.error(error.message)
                setLoad(false)
            });


    }


       //!Login by Google 
    // sign up by google start
    const signUpByGoogleHandler = () => {
        setLoad(true);
       
        signUpByGoogle()
            .then((result) => {
                const user = result.user;
                

                // Getting jwt Token from jwt provider
                fetch('https://diana-spa-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email: user?.email })





                })
                    // Storing the jwt token into local storage
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('spa-token', data.token);
                        navigateNow()
                      
                    })
                    .catch(error =>  {
                        console.error(error.message)
                        setLoad(false)
                    })
            })
            .catch(error =>  {
                console.error(error.message)
                setLoad(false)
            })
    }
    // sign up by google End










    // setup navigator After Register.
    const navigateNow = () => {
        setTimeout(() => { navigate(from, { replace: true }) }, 1);
    }









    return (
        load? <Loader></Loader>
        :
        <div className="hero min-h-screen">

            <Helmet>
                <title>Diana-SPA Login</title>
            </Helmet>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Step into an oasis of magnificence we devised for your new beauty center, resort or spa site. We are sure you’ll love your time with Diana.</p>
                    <div className='hidden md:block'><Gallery></Gallery></div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div className='card-body'>

                        <p className='mb-2'>are you new here? <Link className='text-blue-400 hover:text-blue-600' to='/register'>Register</Link></p>


                        <button onClick={signUpByGoogleHandler} className='btn btn-outline'><FaGoogle className='mr-2' /> Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;