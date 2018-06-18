import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import StoryDashboard from './containers/StoryDashboard';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <Grid container className="navbar" justify='center' spacing={8}>
          <Grid item>
            <Link to='/stories'>
              <Button variant="contained" color="primary">
                My Stories
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/locations'>
              <Button variant="contained" color="primary">
                Locations
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/categories'>
              <Button variant="contained" color="primary">
                Categories
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
