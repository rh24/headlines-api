// Handles user's saved locations by holding them in state.
// Makes a new <LocationCard location={location} /> for each of the user's saved places.
// Places can be Country, City, State.
// <LocationDashboard /> component also queries the News API for top headlines per location, then, passes them down as props for each respective LocationCard.

/*
this.state = {
  locations: [
    {
      name: 'New York City',
      headlines: [
        {
          title: 'Best in Theaters 2018',
          author: 'April May',
          date:
        }
      ]
    }
  ],
}
*/

import React from 'react';

class Location extends React.Component {
  render() {
    return (
      <div className="location-dashboard">
        <h1>Top Headlines by Location</h1>
      </div>
    )
  }
}

export default Location;
