import React from 'react';
import PropsTypes from 'prop-types';
import SmallCard from 'Components/ProfileContent/SmallCard/SmallCard';

import classes from './Cards.scss';


const cards = (props) => {
  const rides = props.rides.map((ride, index) => {
    return <SmallCard key={index} title={ride.title} date={ride.date} />
  });

  return (
    <div className={classes.cards}>
        <h3> {props.title} </h3>
        <div className={classes.content}>
          {rides}
        </div>


    </div>
  );
}

cards.propTypes ={
  title: PropsTypes.string.isRequired,
  rides: PropsTypes.array.isRequired,

}


export default cards;
