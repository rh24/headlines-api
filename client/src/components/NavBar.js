import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const NavBar = () => {
  return (
    <div style={{ padding: 20 }}>
      <Grid container className="navbar" justify='center'>
        <Grid item>
          <Button variant="contained" color="primary">
            My Stories
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Locations
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Categories
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavBar;
