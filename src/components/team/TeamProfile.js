import React from 'react'; 
import '../../Eboard.css';
import '../../App.css'; 

export function Profile({name, year, pos, bio, img}) {
    return (
        <div class="profile-row">
            <div class="img-container">
                <img src={img} className='profile-pic'/>
            </div>

            <div>
                <div class="text-container">
                    <div class="profile-name">{name} {year}</div>
                    <div class="position">{pos}</div>
                    <br/>
                    <div class="profile-text">{bio}</div>
                </div>
                
            </div>
        </div>

    );
}