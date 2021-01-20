import React from 'react'; 
import { BsBook, BsGraphUp } from 'react-icons/bs'; 
import { GiDiscussion, GiAirplaneDeparture } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import '../../App.css';

export function BookIcon() {
    return (
        <IconContext.Provider
            value={{color: 'black', size: '100px', className: 'icon-hover'}}
        >
            <div>
                <BsBook/>
            </div>
        </IconContext.Provider>
    );
}

export function DiscussionIcon() {
    return (
        <IconContext.Provider
            value={{color: 'black', size: '100px', className: 'icon-hover'}}
        >
            <div>
                <GiDiscussion/>
            </div>
        </IconContext.Provider>
    );
}

export function GraphIcon() {
    return (
        <IconContext.Provider
            value={{color: 'black', size: '100px', className: 'icon-hover'}}
        >
            <div>
            <BsGraphUp/>
            </div>
        </IconContext.Provider>
    );
}

export function PlaneIcon() {
    return (
        <IconContext.Provider
            value={{color: 'black', size: '100px', className: 'icon-hover'}}
        >
            <div>
                <GiAirplaneDeparture/>
            </div>
        </IconContext.Provider>
    );
}