import React from 'react'
import arrow from './../../icons/loadingPage/arrow.svg'
import div from './../../icons/loadingPage/div.svg'
import bulb from './../../icons/loadingPage/bulb.svg'
import note from './../../icons/loadingPage/note.svg'
import rocket from './../../icons/loadingPage/rocket.svg'
import star8 from './../../icons/loadingPage/Star 8.svg'
import star from './../../icons/loadingPage/Star.svg'
import suitcase from './../../icons/loadingPage/suitcase.svg'
import udgam from './../../icons/loadingPage/udgam.svg'
import {motion} from 'framer-motion';
import "./loading.css";
import { keyframes } from 'styled-components'


function Loading(){

    return(
        
        <div id="bg">
        
            <img  src={star} id="star" className='animation' alt="" />
            <img src={div} id="div" className='animation' alt=""/>
            <img src={note} id="note"className='animation' alt=""/>
            <img src={star8} id="star8"className='animation' alt=""/>
            
            <img src={bulb} id="bulb"className='animation' alt=""/>
            <img src={suitcase} id="suitcase"className='animation' alt=""/>
            <img src={arrow} id="arrow"className='animation' alt=""/>
            <img src={rocket} id="rocket"className='animation' alt=""/>
            <div id="text">
            <img src={udgam} id="udgam" alt=""/>
            <p id="one">Well, I will not be blackmailed by some ineffectual, privileged, effete, soft-penised, debutante. </p>
            <p id="two">-Vedprakash Sirji</p>
            </div>
            <div id="loading">
            LOADING...
            </div>
      </div>
    )
    
}

export default Loading;
