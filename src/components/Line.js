import React from 'react'; 
import { Container } from 'react-bootstrap'; 
import styled from 'styled-components'; 

const Styles = styled.div`
    .styled-line {
        margin-left: 5%; 
        margin-right: 5%;
        margin-top: 50px; 
        margin-bottom: 10px;
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
`; 

export const LineBreak = () => (
    <Styles>
        <Container fluid>
            <div className='styled-line'>
                <hr/>
            </div>
        </Container>
    </Styles>
)