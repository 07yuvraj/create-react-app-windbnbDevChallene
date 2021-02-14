import React, { Component } from 'react';
import Card from './Card';
import './Card.css';

export default function RoomList(props) {
    let rooms=props.val;
    let guest=props.guest;
    let count=0;
    return (
        <div>
            <div className="allrooms">
                {rooms.map(room=>(
                    guest<room.maxGuests
                    ?<Card key={count++} room={room}/>
                    :" "
                ))}
            </div>  
        </div>
    );
}