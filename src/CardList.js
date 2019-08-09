import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            { //the brackets allow you to wrap all of the JS below inside the single div above
                robots.map(user, i => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;