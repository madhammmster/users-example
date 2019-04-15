import React from 'react';

import './Card.css'

class Card extends React.Component {
    
    render() {
        const { user } = this.props;
        const { name: { first, last }, email, picture: { large } } = user;

        return (
            <div className="container-card">
                <div className="card">
                    <div className="container-user-icon">
                        <div className="user-icon">
                            <img src={large} alt="" />
                        </div>
                    </div>
                    <div className="container-user-data">
                        <div className="user-data">
                            Imię: <span className='large'>{first}</span>
                        </div>
                        <div className="user-data">
                            Nazwisko: <span className='large'>{last}</span>
                        </div>
                        <div className="user-data">
                            Email: <span className='large'>{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;