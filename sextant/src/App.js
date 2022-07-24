import React, { Component } from 'react';
import Title from './Banner';
import Exhibit from './Exhibit';
import axios from 'axios';
import {useState,useEffect} from 'react'
import './App.css';

function App() {

    //creating IP state
    const [ip, setIP] = useState('');

    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      setIP(res.data.IPv4)
    }
    
    useEffect( () => {
      //passing getData method to the lifecycle method
      getData()
  
    }, [])
  
  return (
    <div className="App">
      <Title />
      <Exhibit name="I'm an exhibit!"></Exhibit>
                <Exhibit name="I'm also an exhibit!"></Exhibit>
                <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
      <p className='block'>
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
      </p>
    </div>
  );
}
export default App;

