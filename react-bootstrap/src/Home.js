import React from 'react'
import { Jumbotron } from './components/home/Jumbotron'; 
import { Pillars } from './components/home/Pillars'; 
import { About } from './components/home/About';
import { LineBreak } from './components/Line';
import styled from 'styled-components'; 

const Styles = styled.div`
    .background {
        background-color: #f4f4f4;
    }
`; 

export const Home = () => (
    <Styles>
        <div>
            <Jumbotron/>
            <div className='background'>
            <Pillars/>
            <LineBreak/>
            <About/>
            </div>
        </div>
    </Styles>
)
