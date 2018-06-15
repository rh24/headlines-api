// <StoryDashboard /> will be a stateful class component.
// <StoryCard /> will be a child, stateless functional/presentation component.

import React from 'react';

class StoryDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="story-dashboard">
        <h1>Saved Stories</h1>
      </div>
    );
  }
}

export default StoryDashboard;
