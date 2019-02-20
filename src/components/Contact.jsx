import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    backgroundColor: 'rgba(113, 154, 97, 0.83)',
  },
  content: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px',
    textAlign: 'center',
  },
  title: {
    color: 'rgba(223, 233, 249, 1)',
  },
  text: {
    color: '#c6c3c3',
  },
});

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.container }>
        <div className={ classes.content }>
          <Typography variant="h1" gutterBottom>
            <a className={ classes.title } href="tel:510-912-1662">(510) 912-1662</a>
          </Typography>
          <Typography className={ classes.title } variant="h3">
            Call Now
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Contact);
