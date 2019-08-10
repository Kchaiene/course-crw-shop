import React, {useState} from 'react';
import "./Directory.scss";
import {sections as sectionAPI} from "./10.4 directory.data.js";
import MenuItem from "../MenuItem/MenuItem";



const Directory = () => {
    const [sections] = useState(sectionAPI);

    return (
        <div className='directory-menu'>
            { sections.map( section => (
                <MenuItem key={section.id}
                          title={section.title}
                          imageUrl={section.imageUrl}
                          size={section.size}
                          linkUrl={section.linkUrl}
                />)
            ) }
        </div>
    );
};

export default Directory;
