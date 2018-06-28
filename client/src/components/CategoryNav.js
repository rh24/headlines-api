import React from 'react';
import CategoryChip from './CategoryChip';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const CategoryNav = (props) => {
  const categoryChips = props.categories.map((category, idx) => <CategoryChip name={category.name} key={category.id} />);

  const styles = {
    panel: {
      // maxWidth: '75%',
      // overflow: 'auto',
    },
  }

  return (
    <ExpansionPanel style={styles.panel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Latest news in...</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {categoryChips}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default CategoryNav;
