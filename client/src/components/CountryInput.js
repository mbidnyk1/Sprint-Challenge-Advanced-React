import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
const CountryInput = (props) => {
    
        const [data,setData] = useLocalStorage(props.playerData)
            useEffect(() => {
                setData(props.PlayerData)
            },[])
            
        
        
        
        
        
        return(
            <>
            <label htmlFor='countryValue'></label>
            <input id='countryValue' 
            name='countryValue' 
            Type='text'
            placeholder='Type in a country' 
            value={props.countryValue}
            onChange={props.handleChanges}
            />
            </>
        )
    }


export default CountryInput