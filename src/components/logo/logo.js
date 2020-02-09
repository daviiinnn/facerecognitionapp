import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
    return(
        <div className='ma4 nt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop:'5px'}}src="https://img.icons8.com/ios/100/000000/compact-camera.png" alt='logo' /> 
                </div>
            </Tilt>

        </div>
    )
};

export default Logo;