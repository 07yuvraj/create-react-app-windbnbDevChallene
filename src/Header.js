import React,{useState} from 'react';
import stays from './API/stays.json';
import RoomList from './RoomList';
import './Card.css';
import SearchBar from './SearchBar/SearchBar';
import triangleLogo from "./Assests/triangleLogo.png";


export default function Header() {
    const [location,setlocation]=useState(" ");
    const val=(location===" ")? stays : stays.filter(room=>room.city===location);
    const [guest,setguest]=useState(0);
    const resetlocation=()=>{
        setlocation(" ");
    }

    return (
        <div>
            <p className="windbnd_logo" onClick={resetlocation}><img src={triangleLogo} alt="windbnb logo"/>windbnb</p>
            <SearchBar location={location} setlocation={setlocation} guest={guest} setguest={setguest}/>
            <RoomList val={val} guest={guest}/>
        </div>
    );
}