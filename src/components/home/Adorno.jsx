import React from 'react';

export default function Adorno({ backgroundImage, styleOption = {}, ref }) {
    return (
        <div
            ref={ref}
            className='adorno'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#131414',
                borderImageRepeat: 'unset',
                ...styleOption
            }}
        />
    );
};