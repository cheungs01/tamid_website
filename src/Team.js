import React from 'react'
import Container from 'react-bootstrap/Container'; 
import './App.css';
import { Profile } from './components/team/Profile';
import { LineBreak } from './components/Line';
import steven from './assets/steven_headshot.jpg';
import matthew from './assets/matthew_headshot.jpg';
import ben from './assets/ben_headshot.jpg';
import julian from './assets/julian_headshot.jpeg';
import ethan from './assets/ethan_headshot.jpeg';
import gabriel from './assets/gabriel.JPG';
import simon from './assets/simon.JPG';

export const Team = () => (
    <Container fluid>
        <div className='title'>Our Team</div>
        <LineBreak/>
        <div className='subtitle'>Executive Board</div>
        <br/>
        <div class="grid">
            <div>
                <Profile name="Benjamin Fink" year="'21" pos="President Emeritus"
                bio="Ben is a senior concentrating in Classics and Economics from 
                New York, NY. He loves playing pickup basketball, trying new 
                foods, and learning about other languages and cultures." img={ben}/>
            </div>
            <div>
                <Profile name="Ethan Novak" year="'22" pos="Co-President"
                bio="I was born and raised in London, England and am a current Junior studying CS-Econ. 
                I joined Tamid my First Year and have been a member of the Investment 
                Fund for all three years. I have enjoyed leading and discussing stock 
                pitches and facilitating education sessions while in Tamid." img={ethan}/>
            </div>
            <div>
                <Profile name="Julian Croonenberghs" year="'22" pos="Co-Director of The Fund "
                bio="I am a Junior from Brussels, Belgium, and I joined Tamid in the 
                Spring of my Freshman year.  After deciding to concentrate in APMA-CS, 
                joining the Tamid Fund was an excellent way for me to continue learning 
                about Finance, which was a growing interest of mine throughout my 
                Freshman year, alongside my studies. Since then, the fund has grown a 
                lot and has allowed for me to learn about various facets of Finance, 
                from the Stock Market and stock pitching, to accounting and valuation 
                methods, which were all incredibly useful throughout the Finance 
                recruitment process. My favorite part of being Co-Director of The 
                Fund is teaching new members about the many things that I have 
                learned during my time in Tamid." img={julian}/>
            </div>
            <div>
                <Profile name="Simon Giordano" year="'22" pos="Fund Manager"
                bio="I'm a 22.5 grad from Sydney, Australia. I joined TAMID in 2019, 
                at which point I knew very little about finance. Thanks to TAMID 
                and my own curiosity, I've since learned how to run my own portfolio, 
                worked for a hedge fund in Sydney, written finance related op-eds for 
                BPR, become a fund manager at TAMID, and landed an Investment Banking 
                job in New York. In my spare time I love to backpack around the world. " img={simon}/>
            </div>
            <div>
                <Profile name="Gabe Zuckerman" year="'22" pos="Director of Recruitment"
                bio="Gabe is a Junior concentrating in Behavioral Decision Sciences. He 
                has been interested in entrepreneurship since middle school 
                and enjoys working with Israeli founders on TAMID consulting projects. 
                Gabe is excited to combine his interests in decision making, entrepreneurship, 
                and strategy in the future!" img={gabriel}/>
            </div>
            <div>
                <Profile name="Matthew Dai" year="'21.5" pos="Co-Director of Consulting"
                bio="Matt is a junior from Syracuse, NY. He loves food, traveling, and 
                immersing himself in new cultures. When not working on TAMID projects, 
                he's either cooking, eating, thinking about eating, studying, or sleeping." img={matthew}/>
            </div>
            <div>
                <Profile name="Steven Cheung" year="'22" pos="Director of Technology"
                bio="Steven is a junior concentrating in Computer Science from Pittsburgh, PA.
                His hobbies include soccer, tennis, and speed solving Rubik's cubes." img={steven}/>
            </div>
        </div>
        <LineBreak/>
        <br/>
        
    </Container>
)
