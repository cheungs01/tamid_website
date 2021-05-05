import React from 'react'; 
import '../../Eboard.css';
import '../../App.css'; 

export function AlumniProfile({name, year, pos, conc, career, img}) {
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
                    <div class="profile-text"><i class="position">Concentration: </i>{conc}</div>
                    <div class="profile-text"><i class="position">Career: </i>{career}</div>
                </div>
                
            </div>
        </div>

    );
}