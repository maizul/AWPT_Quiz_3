import React, { useState } from 'react';
import Eventdb from '../DB/Eventdb.js';
import Events from './Events';
const EventView = () => {
    const data=Eventdb
    const [Event]=useState(data)
    
    return (
        <div>
            
            <div className="row">
                <div className="title">
                    <h2><center>Events</center></h2>
                </div>
                {
                    Event.map(eve=><Events item={eve}></Events>)
                }
            </div>
        </div>
    );
};

export default EventView;