import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

//styles
import '../../../styles/skills.css';


export default function Skills() {
    const [listSkills, setListSkills] = useState([]);

    return (
        <Element className="skills" id='3'>
            <div className='card_data_skill'>

                <div className='card_skill' >
                    <p>JavaScript</p>
                </div>
                
            </div>
        </Element>
    );
};
