import React from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import classes from './Rides.scss';
import Ride from './Ride';

const Rides = (props) => {
  const rideMap = [
    {
      id: 1,
     title:"Oh my ride",
     destination:"Aba",
     location:"Lagos",
     slot:5,
     driver:"Joji",
     date:"24th july",
     car:"Limo"
    },
    {
      id: 2,
      title:"Oh my ride",
      destination:"Aba",
      location:"Lagos",
      slot:5,
      driver:"Joji",
      date:"24th july",
      car:"Limo"
    },

      {
        id: 3,
        title:"Oh my ride",
        destination:"Aba",
        location:"Lagos",
        slot:5,
        driver:"Joji",
        date:"24th july",
        car:"Limo"
      },
        {
          id: 4,
          title:"Oh my ride",
          destination:"Aba",
          location:"Lagos",
          slot:5,
          driver:"Joji",
          date:"24th july",
          car:"Limo"

        },

          {
            id: 5,
            title:"Oh my ride",
            destination:"Aba",
            location:"Lagos",
            slot:5,
            driver:"Joji",
            date:"24th july",
            car:"Limo"
          },
            {
              id: 7,
              title:"Oh my ride",
              destination:"Aba",
              location:"Lagos",
              slot:5,
              driver:"Joji",
              date:"24th july",
              car:"Limo"
            },
              {
                id: 8,
                title:"Oh my ride",
                destination:"Aba",
                location:"Lagos",
                slot:5,
                driver:"Joji",
                date:"24th july",
                car:"Limo"
                },
    {
     id: 9,
     title:"Oh my ride",
     destination:"Aba",
     location:"Lagos",
     slot:5,
     driver:"Joji",
     date:"24th july",
     car:"Limo"
    }
  ];
  const mapped = rideMap.map((item, index) =>{
    return <Ride
        key={index}
        id={item.id}
        title={item.title}
        destination={item.destination}
        location={item.location}
        slot={item.slot}
        driver={item.driver}
        date={item.date}
        car={item.car}
        clicked={() => props.history.push(`/dashboard/rides/${item.id}`)}
      />
    });
  return (
    <div className={classes.Rides}>
      {mapped}
    </div>
  )
}

Rides.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
}

export default withRouter(Rides);
