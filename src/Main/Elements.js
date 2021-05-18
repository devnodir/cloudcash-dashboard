import React from 'react';
import '../style/main.scss';
import Cards from './mainPageElements/Cards';
import Goals from './mainPageElements/Goals';

const Elements = () => {
    return (
        <div class="elements">
            <Cards />
            <Goals />
        </div>
    );
};

export default Elements;