import React, { useContext, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { AuthUserContext } from '../../Context/UserContext';

const Services = () => {

    const {loading,setLoading} = useContext(AuthUserContext);

   
    // Services
    const [services, setServices] = useState([]);


    // Loading Services
    useEffect(()=> {
        setLoading(true);
        fetch("https://diana-spa-server.vercel.app/services")
        .then(res=> res.json())
        .then(data=> {setServices(data.reverse())
            setLoading(false);
        })
        .catch(error=> console.log(error))
    }, [])


    return (
        loading ? <div>
        <Helmet><title>Loading!!!</title></Helmet>
        <Loader></Loader>
        </div>
        :<div className='my-10'>
            <Helmet>
                <title>Diana-SPA Services</title>
            </Helmet>

            <div className='flex flex-wrap mx-auto gap-5 justify-center items-center'>
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    
    );
};

export default Services;