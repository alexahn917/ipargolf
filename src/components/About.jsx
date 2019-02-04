import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    backgroundImage: 'url(/image/about.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '200px 30px 200px 30px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
  },
  text: {
    color: '#c6c3c3',
  },
});

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.container }>
        <div className={ classes.content }>
          <Typography className={ classes.title } variant="h1" gutterBottom>
            About
          </Typography>
          <Typography className={ classes.text } variant="h4" gutterBottom>
            iPar Academy is a <b>Golf Lesson</b> institution with an indoor
            driving range.
          </Typography>
          <Typography className={ classes.text } variant="h4" gutterBottom>
            We also sell great selection of Golf Clubs, along with club fitting services.
          </Typography>
          <Typography className={ classes.text } variant="h4" gutterBottom>
            iPar offers golf lessons for beginners, adults, seniors, and juniors.
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(About);
