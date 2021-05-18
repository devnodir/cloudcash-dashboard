import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Toggle = (props) => {

    return (
        <div className="toggle">
            <MenuIcon onClick={props.click} className="toggle" />
        </div>
    );
};

export default Toggle;