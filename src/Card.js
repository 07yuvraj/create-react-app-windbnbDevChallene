import React, { Component } from 'react';
import './Card.css';

export default function Card(props) {
    let room = props.room;
    return (
        <div className='room'>
            <img src={room.photo} alt='' className='room_img' />
            <div className="room_wrapper">
                {room.superHost && <span className='room_super-host'>Super Host</span>}
                <p className="room__type">
                    {room.type}. {room.beds}
                </p>
                <span className="room_rating">
                    <i className="fas fa-star"></i>
                    {room.rating}
                </span>
            </div>
            <p className="room_title">
                {room.title}
            </p>
        </div>
    );
}