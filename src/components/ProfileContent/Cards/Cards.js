import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SmallCard from 'Components/ProfileContent/SmallCard/SmallCard';
import classes from './Cards.scss';


const cards = (props) => {
  let rides = <SmallCard
              title=" No Ride Yet"
              status="You have got no ride here"
              clicked={()=> null }
            />;

  if (props.rides.length > 0){
    rides = props.rides.map((ride) => {
      return <SmallCard
        key={ride.id}
        title={ride.name}
        status={ride.status}
        clicked={()=> props.history.push(`/dashboard/rides/${ride.id}`) }
      />
    });
  }

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
  title: PropTypes.string.isRequired,
  rides: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
}


export default withRouter(cards);
