import React from 'react'
import Container from 'react-bootstrap/Container'; 
import './App.css';
import { LineBreak } from './components/Line';

export const Consulting = () => (
    <Container fluid>
        <div className="title">Consulting</div>
        <div className="text">
            <p>
                TAMID at Brown offers pro bono consulting services to 
                international high-tech start-ups. The organization produces 
                deliverables focused on its core competencies which include, 
                but are not limited to market analysis and research, 
                go-to-market strategy, competitor analysis, and pricing 
                strategy. As either a Business Analyst, Project Manager, or 
                Strategic Advisor, members will gain diverse industry exposure 
                and unique experience serving clients who value TAMID’s work.
            </p>
            <br/>
            <p>
                For more information, contact our Directors of Consulting 
                <a href="mailto: neel_dhavale@brown.edu"> Neel</a> or  
                <a href="mailto: matthew_dai1@brown.edu"> Matthew </a>.
            </p>
        </div>

        <LineBreak/>

        <div className='subtitle'>Past Projects</div>


        {/* HTML for Savings Jar Logo */}
        <div style={{width: "600px", margin: "auto"}}>
        <a href="https://www.savings-jar.com/">
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="261.7 130.9 2811 867.2" viewBox="261.7 130.9 2811 867.2" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" width="600px" style={{display: "block", margin: "auto"}}>
            
            <g>
                <path d="M712.9 564.2h-25.5v-63.8c0-56.2-45.7-102-102-102-56.2 0-102 45.7-102 102v63.8H458v-63.8c0-70.3 57.2-127.4 127.4-127.4s127.4 57.2 127.4 127.4l.1 63.8z" fill="#000000" data-color="1"></path>
                <path d="M661.9 564.2h-25.5v-63.8c0-28.2-22.9-51-51-51s-51 22.9-51 51v63.8h-25.5v-63.8c0-42.2 34.3-76.5 76.5-76.5s76.5 34.3 76.5 76.5v63.8z" fill="#000000" data-color="1"></path>
                <path d="M585.4 840.6c-84.4 0-153 6-153-78.4V589.6c0-21.1 17.2-38.2 38.2-38.2H700c21.1 0 38.2 17.2 38.2 38.2v172.5c.2 84.4-68.4 78.5-152.8 78.5z" fill="#02EDA7" data-color="2"></path>
                <path d="M350 528.2h-29.4V411c0-32.7 21.9-61.8 53.4-70.7l16.2-4.6 8.1 28.3-16.2 4.6c-18.8 5.4-32 22.8-32 42.4l-.1 117.2z" fill="#000000" data-color="1"></path>
                <path d="M776.7 931.1h-29.5v-29.4h29.4c24.3 0 44.1-19.8 44.1-44.1V725.1h29.5v132.4c0 40.6-33 73.6-73.5 73.6z" fill="#000000" data-color="1"></path>
                <path d="M492.7 130.9H350c-24.3 0-44.1 19.8-44.1 44.1v29.4c0 24.3 19.8 44.1 44.1 44.1h14.7v33l-6.9 2c-56.6 16.2-96.1 68.5-96.1 127.3v454.9c0 73 59.4 132.4 132.4 132.4h382.6c73 0 132.4-59.4 132.4-132.4V411c0-58.8-39.5-111.2-96-127.3l-7-2v-33h14.7c24.3 0 44.1-19.8 44.1-44.1v-29.4c0-24.3-19.8-44.1-44.1-44.1H678.1M350 219.2c-8.1 0-14.7-6.6-14.7-14.7v-29.4c0-8.1 6.6-14.7 14.7-14.7h470.8c8.1 0 14.7 6.6 14.7 14.7v29.4c0 8.1-6.6 14.7-14.7 14.7H350zm529.7 646.7c0 56.8-46.2 103-103 103H394.1c-56.8 0-103-46.2-103-103V411c0-45.7 30.7-86.5 74.7-99l28.3-8.1v-55.2h382.6v55.2L805 312c44 12.6 74.7 53.3 74.7 99v454.9z" fill="#000000" data-color="1"></path>
                <path d="M350 704.8h-29.4v-29.4H350v29.4zm0-58.9h-29.4v-29.4H350v29.4zm0-58.8h-29.4v-29.4H350v29.4z" fill="#000000" data-color="1"></path>
                <path d="M850.2 695.7h-29.4v-29.4h29.4v29.4zm0-58.9h-29.4v-29.4h29.4v29.4zm0-58.8h-29.4v-29.4h29.4V578z" fill="#000000" data-color="1"></path>
                <path d="M601.4 773.8v23h-24.3v-23.6c-20-2.6-39.6-10.5-55-22.2l18.2-26.6c12.6 9.5 24.3 16.1 37.9 18.9v-36.9c-33.5-9.1-50.1-22.2-50.1-49.6 0-25.9 19.6-42.9 48.9-45.9v-13.5h24.3v13.9c16.5 2.3 30.8 8.4 43.3 17.2L629 655.8c-9.4-6.3-19.1-11.2-28.9-13.8v35.2c35.4 9.5 50.6 24.3 50.6 50.3 0 26-19.8 43.1-49.3 46.3zm-23.2-133.7c-11.2 1.6-16.1 7.2-16.1 14.6 0 7.2 3.3 12.1 16.1 16.8v-31.4zm21.9 72v32.7c10.9-1.6 16.5-6.8 16.5-15.2.1-7.9-3.8-12.9-16.5-17.5z" fill="#0167E7" data-color="3"></path>
                <path d="M1070.8 482.7l52.6-62.7c32 24.4 68.6 34.5 103.2 34.5 17.7 0 25.3-4.6 25.3-12.6v-.9c0-8.4-9.3-13.1-40.8-19.4-66.1-13.5-124.2-32.4-124.2-94.7v-.9c0-56 43.8-99.4 125.1-99.4 56.8 0 98.9 13.5 133.1 40.4l-48 66.5c-27.8-20.2-61.1-29.1-88.4-29.1-14.7 0-21.5 5.1-21.5 12.2v.8c0 8 8 13.1 39.2 18.9 75.4 13.9 125.9 35.8 125.9 95.2v.8c0 61.9-50.9 99.8-130.1 99.8-60 .3-113.9-16.6-151.4-49.4z" fill="#000000" data-color="1"></path>
                <path d="M1477.5 230h97.7l124.2 296.8h-106.9l-15.6-39.6h-103.2l-15.2 39.6h-105.3L1477.5 230zm75 187.4l-26.9-71.6-26.9 71.6h53.8z" fill="#000000" data-color="1"></path>
                <path d="M1690.2 232.2h110.3l57.3 165.5 57.3-165.5h108.6L1904.1 529h-94.3l-119.6-296.8z" fill="#000000" data-color="1"></path>
                <path d="M2036.7 232.2h98.5v294.7h-98.5V232.2z" fill="#000000" data-color="1"></path>
                <path d="M2169.7 232.2h92.2l104.8 130.1V232.2h97.7v294.7h-87.6l-109.5-136v136h-97.7V232.2z" fill="#000000" data-color="1"></path>
                <path d="M2491.4 380.4v-.8c0-88 69.5-153.7 162.5-153.7 50.5 0 91.4 16.8 123.4 44.6l-55.2 66.5c-19.4-16.4-40.8-25.7-65.3-25.7-38.3 0-66.1 29.5-66.1 69.5v.8c0 41.7 29.1 70.3 70.3 70.3 16.8 0 26.1-2.5 33.7-6.7v-29.5h-50.5v-63.2H2787V489c-32 26.1-76.6 44.2-130.1 44.2-91.8 0-165.5-61.5-165.5-152.8z" fill="#000000" data-color="1"></path>
                <path d="M2791.2 482.7l52.6-62.7c32 24.4 68.6 34.5 103.2 34.5 17.7 0 25.3-4.6 25.3-12.6v-.9c0-8.4-9.3-13.1-40.8-19.4-66.1-13.5-124.2-32.4-124.2-94.7v-.9c0-56 43.8-99.4 125.1-99.4 56.8 0 98.9 13.5 133.1 40.4l-48 66.5c-27.8-20.2-61.1-29.1-88.4-29.1-14.7 0-21.5 5.1-21.5 12.2v.8c0 8 8 13.1 39.2 18.9 75.4 13.9 125.9 35.8 125.9 95.2v.8c0 61.9-50.9 99.8-130.1 99.8-60 .3-113.9-16.6-151.4-49.4z" fill="#000000" data-color="1"></path>
                <path d="M1075.8 855l64.4-54.3c11.4 16 22.3 25.7 38.3 25.7 16.4 0 27.4-13.5 27.4-34.1V609.2h96v181.5c0 38.7-8.8 65.3-30.7 87.2-20.2 20.2-49.7 32-85.1 32-56.4-.1-88.8-22.9-110.3-54.9z" fill="#000000" data-color="1"></path>
                <path d="M1435.4 607.1h97.7l124.2 296.8h-106.9l-15.6-39.6h-103.2l-15.2 39.6h-105.3l124.3-296.8zm75 187.3l-26.9-71.6-26.9 71.6h53.8z" fill="#000000" data-color="1"></path>
                <path d="M1669.5 609.2h144c52.2 0 85.5 13.1 106.1 33.7 17.7 17.7 26.9 39.6 26.9 69.9v.8c0 42.9-22.3 72.8-58.1 90.1l68.6 100.2h-112.4l-55.6-84.2h-21.1v84.2h-98.5V609.2zm141.1 140.2c23.6 0 37.9-10.5 37.9-28.6v-.8c0-18.9-14.7-28.2-37.5-28.2h-42.9v57.7h42.5z" fill="#000000" data-color="1"></path>
            </g>
            
        </svg>
        </a>
        </div>

        <br/>
        <br/>
        <br/>
    </Container>
)
