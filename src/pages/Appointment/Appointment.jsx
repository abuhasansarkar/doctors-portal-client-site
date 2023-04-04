import React, { useState } from 'react';
import FeaturedCalender from './FeaturedCalender';
import AvailableAppointments from './AvialableAppointments/AvailableAppointments';


const Appointment = () => {
     const [selectedDate, setSelectedDate] = useState(new Date());
     return (
          <div>
               <FeaturedCalender selectedDate={selectedDate} setSelectedDate={setSelectedDate}></FeaturedCalender>
               <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
               
          </div>
     );
};

export default Appointment;