import React from 'react';


function Cols(props) {
    return (
        <div>
            <div className='col-4'></div>
            <div className='col-4'></div>
            <div className='col-4'></div>
            <div className='col-4'></div>
        </div>
    );
}

export default function Footer(props) {
    return (
        <>
            <footer>
                <Cols />
            </footer>
        
        </>
    );
}