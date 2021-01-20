import React from 'react'; 
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'; 
import styled from 'styled-components'; 
import brownImage from '../../assets/brown.jpg'; 
import tamidImage from '../../assets/tamid_logo.png'

const Styles = styled.div`
    .jumbo {
        background: url(${brownImage}) no-repeat fixed bottom; 
        background-size: cover;
        color: #ccc; 
        height: 1000px; 
        position: relative; 
        z-index: -2; 
        margin: 0;
    }

    .overlay {
        background-color: #000; 
        opacity: 0.6; 
        position: absolute; 
        top: 0; 
        left: 0; 
        bottom: 0; 
        right: 0; 
        z-index: -1; 
        display: flex;
        align-items: center 
    }

    .title {
        margin-top: 10%;
        font-size: 100px;
        text-align: center;
        font-family: 'Overpass', sans-serif;
    }
`; 

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container>
                <div className='title'>
                    <p>TAMID AT BROWN</p>
                    <h1>CONSULTING AND INVESTING</h1>
                    <img src={tamidImage}></img>
                </div>
            </Container>
        </Jumbo>
    </Styles>
)