import React,{useState} from 'react';
import ActiveSearchBar from './ActiveSearchBar';
import InactiveSearchBar from './InactiveSearchBar';

export default function SearchBar({location,setlocation,guest,setguest}){
    const [isactive,setactive]=useState(false);
    const handleActiveChange=()=>{setactive(!isactive)}
    return( 
            isactive?(
            <ActiveSearchBar
                key={0}
                isactive={isactive}
                rooms={location}
                setrooms={setlocation}
                guest={guest}
                setguest={setguest}
                setactive={handleActiveChange}
            />
            ): (<
                InactiveSearchBar
                key={1}
                isactive={isactive}
                rooms={location}
                setrooms={setlocation}
                setactive={handleActiveChange}
            /> 
            )          
    );
}