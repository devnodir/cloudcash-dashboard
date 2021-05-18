import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import users from './users.json';
import userImage from './userImage.png';
import bg from './bg.png';

const Goals = () => {
    return (
        <>
            <div className="goals">
                <p className="goalTitle">
                    Goal <AddCircleIcon />
                </p>
                <div className="cardss">
                    <div className="goalsCard">
                        <span>
                            <h4>$500</h4>
                            <p>12/12/21</p>
                        </span>
                        <FilterHdrIcon className="cardIcon" />
                        <p className="cardType">Holidays</p>
                    </div>
                    <div className="goalsCard">
                        <span>
                            <h4>$500</h4>
                            <p>12/12/21</p>
                        </span>
                        <FilterHdrIcon className="cardIcon" />
                        <p className="cardType">Holidays</p>
                    </div>
                    <div className="goalsCard">
                        <span>
                            <h4>$500</h4>
                            <p>12/12/21</p>
                        </span>
                        <FilterHdrIcon className="cardIcon" />
                        <p className="cardType">Holidays</p>
                    </div>
                    <ChevronRightIcon className="rightIcon" />
                </div>
                <div className="newTransaction">
                    <p>
                        New Transaction
                    </p>
                    <div className="users">
                        <span>
                            {users.map((post) =>{
                                return(
                                    <div>
                                        <img src={userImage} />
                                        <h4>{post.name}</h4>
                                    </div>
                                )
                            })}
                        </span>
                    </div>
                    <label className="sum" for="sum">
                        <input type="text" className="summa" placeholder="$" />
                        <button type="button">Send the transfer</button>
                    </label>
                </div>
                <div className="redSquare">
                    <img src={bg} alt="bg" />
                    <p>Get great loan</p>
                </div>
            </div>
        </>
    );
};

export default Goals;