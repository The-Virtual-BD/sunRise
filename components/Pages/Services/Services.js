import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServicesDetails from './ServicesDetails';
import Feedbacks from './Feedbacks';
import StrategicServices from '../../Homepage/StrategicServices';
import Implementation from '../../Homepage/Implementation';

const Services = () => {
    return (
        <div>
            <ServiceBanner />
            <ServicesDetails />
            <Feedbacks />
            {/* <StrategicServices /> */}
            <Implementation />


        </div>
    );
};

export default Services;