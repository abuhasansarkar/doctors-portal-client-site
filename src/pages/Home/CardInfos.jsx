import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import CardInfo from './CardInfo';


const CardInfos = () => {

     const cardData = [
          {
              id: 1,
              name: 'Opening Hours',
              description: 'Open 9.00 am to 5.00pm everyday',
              icon: clock,
              bgClass: 'bg-gradient-to-r from-primary to-secondary'
          },
          {
              id: 2,
              name: 'Our Locations',
              description: 'Open 9.00 am to 5.00pm everyday',
              icon: marker,
              bgClass: 'bg-accent'
          },
          {
              id: 3,
              name: 'Contact Us',
              description: 'Open 9.00 am to 5.00pm everyday',
              icon: phone,
              bgClass: 'bg-gradient-to-r from-primary to-secondary'
          },
      ]

     return (
          <div className='lg:flex justify-between gap-10 max-w-[1440px] m-auto py-20'>
               {
                cardData.map(card => <CardInfo card={card} key={card.id}></CardInfo>)
               }
          </div>
     );
};

export default CardInfos;