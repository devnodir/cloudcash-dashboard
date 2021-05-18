import React, {useState, useEffect} from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import axios from 'axios';

const Cards = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data);
                console.log(res);
            })
            .catch(err => {
                console.error("Error");
            })

    }, []);

    return (
        <>
            <div className="cards">
                <div className="creditCard">
                    <p id="themeCard">Cards</p>
                        <div className="cardSide">
                            <div className="card">
                                <ChevronLeftIcon id="leftIcon" />
                                <ChevronRightIcon id="rightIcon"/>
                                <p className="cloudCash">cloudcash</p>
                                <p className="accountType">premium account</p>
                                <h3>5789 **** **** 2847</h3>
                                <div className="cardName">
                                    <span className="cardHolderName">
                                        <p>Card holder</p>
                                        <h4>Mike Smith</h4>
                                    </span>
                                    <span className="expireDate">
                                        <p>Expirde Date</p>
                                        <h4>06/21</h4>
                                    </span>
                                </div>
                            </div>
                            <div className="balanceInfos">
                                <span className="currentBalance">
                                    <h2>$2850.75</h2>
                                    <p>Current balance</p>
                                </span>
                                <span className="income">
                                    <h3>$2850.75</h3>
                                    <p>Income</p>
                                </span>
                                <span className="outcome">
                                    <h4>$2850.75</h4>
                                    <p>Outcome</p>
                                </span>
                            </div>
                        </div>
                </div>
                <div className="transaction">
                    <div className="tableMain">
                        <p>Transaction history</p>
                        <table>
                            <tr>
                                <th>Receiver</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>Shopping</td>
                                    <td>1 April 2021</td>
                                    <td>$0.00</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;