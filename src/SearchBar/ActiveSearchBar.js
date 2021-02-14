import React from 'react';
import stays from '../API/stays.json';
import '../Card.css';
import Textarea from './Textarea'

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
}

const locations = getUniqueListBy(stays, 'city');

const numbers = [1, 2, 3, 4, 5]

export default function ActiveSearchBar({setactive,rooms,setrooms,guest,setguest}) {
    let cnt=0;
    return (
        <div>
            <Textarea room={rooms} activestatus={"active"}/>
            <div className="active_page">
                <div className="location_options">
                    {locations.map(location => (
                        <ul className="locations">
                            <li key={location.city} onClick={() => {
                                if (rooms !== location.city) {
                                    setrooms(location.city)
                                }
                                }}>
                                <i className="fas fa-map-marker-alt"></i> {location.city},{location.country}
                            </li>
                        </ul>
                    ))}   
                </div>
                <div className="add_guest">
                    <span className="guest">Add Guests</span><br/>
                    <button disabled={guest === 0 ? true : false}
                    onClick={()=>setguest(guest-1)}
                    className="setguest">-</button>
                    <span> {guest} </span>
                    <button onClick={()=>setguest(guest+1)} className="setguest">+</button>
                </div>
            </div>
            <button onClick={setactive}>Search Now</button>
        </div>
    );
}