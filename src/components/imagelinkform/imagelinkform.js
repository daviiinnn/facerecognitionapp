import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className='mt100'>
            <p className='f3'>
                {'This SPA can detect faces in the pic that you give it.'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-55 center' 
                        type='text' 
                        placeholder='Paste your link here'
                        onChange={onInputChange}
                        />
                    <button 
                        className='w-45 grow br3 mt10 f4 link ph3 pv2 dib white bg-black'
                        onClick={onButtonSubmit}>
                    Detect
                    </button>
                </div>

            </div>
        </div>
    )
};

export default ImageLinkForm;