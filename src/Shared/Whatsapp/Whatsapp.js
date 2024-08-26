import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import av from '../../assets/images/CPH-2.jpg';
import './whatsapp.css';
const Whatsapp = () => {
    return (
        <div className='sapp'>
            <FloatingWhatsApp
              phoneNumber="+8801971632571"
              accountName="Clipping Path Hero"
              allowEsc
              allowClickAway
              notification ="true"
              notificationSound ="true"
              avatar={av}
              statusMessage="Typically replies within 1 hour"
            
            />
        </div>
    );
};

export default Whatsapp;