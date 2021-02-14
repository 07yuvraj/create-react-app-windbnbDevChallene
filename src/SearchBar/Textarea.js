import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import '../Card.css';

export default function Textarea({room,activestatus}) {
    return (
        <div className={activestatus}>
            <div className="textArea">
                <div className="textarea_title">LOCATION</div>
                <div className="textarea_details">
                    <i className="fas fa-map-marker-alt"></i>
                    {room!==" "
                    ?  room 
                    :  " "
                    }
                </div>
            </div>
            <div className="textArea">
                <div className="textarea_title">GUESTS</div>
                <div className="textarea_details">Add Guests</div>
            </div>
            
            
        </div>
    );
}