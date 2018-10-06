import React from 'react';
import icon1 from 'Assets/images/navigation.png';
import icon2 from 'Assets/images/alarm-clock.png';
import icon3 from 'Assets/images/nocost.png';
import Column from './Column';
import classes from './style.scss';

const items = [
  {
    title: 'Easiest way around',
    alt: 'easy way around',
    image: icon1,
    body: 'One tap and you locate a ride near you. Hop in your driver is your friend. And when you get there, just say a big thank you!'
  },
  {
    title: 'Anytime',
    alt: 'anytime',
    image: icon2,
    body: 'Early morning flight. Late night drinks. Wherever you’re headed, count on Ride my way for a ride. just make a request!'
  },
  {
    title: 'Just free as you see',
    alt: 'no cost',
    image: icon3,
    body: 'For special occasions, no occasion at all, or when you just a need a bit more room, make a request and you could have a ride in a limo for free.'
  }
];

const columns = () => {

    const mappedItems = items.map(item => {
      return <Column
      key={item.title}
      img={{icon: item.image, alt: item.alt, width: 150}}
      title={item.title}>
        {item.body}
      </Column>
    });
    return(
      <div className={classes.columns}>
      {mappedItems}
      </div>
    );
};


export default columns;