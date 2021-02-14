import React from 'react';
import Textarea from './Textarea'
import '../Card.css';

export default function InactiveSearchBar({ setactive, isactive, rooms, setrooms }) {
    return (
        <div className="Notactive">
            <div>
                <Textarea room={rooms} activestatus={"inactive"}/>
            </div>
            <div className="test">
                <button onClick={setactive}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
}