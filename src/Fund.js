import React from 'react'
import Container from 'react-bootstrap/Container'; 
import './App.css';
import { LineBreak } from './components/Line';

export const Fund = () => (
    <Container fluid>
        <div className="title">Investment Fund</div>
        <div className="text">
            <p>
            TAMID at Brown actively manages a $12,000 equity investment fund utilizing a 
            disciplined approach through both qualitative and quantitative 
            analysis. By understanding the global economy and financial markets, 
            we are able to develop strategies and investment opportunities that 
            will outperform the S&P 500 Index.
            </p>
            <br/>
            <p>
                For more information, contact our Director of Fund 
                <a href="mailto: julian_croonenberghs@brown.edu"> Julian</a> or 
                Pitch Managers <a href="mailto: jacob_sullivan@brown.edu"> Jacob </a> 
                and <a href="mailto: simon_giordano@brown.edu@brown.edu"> Simon</a>.
            </p>
        </div>

        <LineBreak/>

        <div className='subtitle'>Portfolio</div>

        <div className="spreadsheet-container">
        <iframe className="spreadsheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQSHoGVRW_Pamc1X8X5GzvL1jo0h8WrbyG9ao3GyI7481uk1iMTuZ02sEpib7WkJafdPmFJ-bVc9dlH/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>
        
        <br/>
        
    </Container>
)
