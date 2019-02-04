import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'antd';

const styles = theme => ({
  container: {
    backgroundImage: 'url(/image/lesson_bg.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 30px 30px 30px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
  },
  text: {
    color: '#c6c3c3',
  },
  images: {
    padding: '30px 30px 100px 30px',
  },
});

const ImageCard = ({ url }) =>
    <div className="imageCard" style={{
      borderRadius: '10px',
      margin: '20px',
      height: '300px',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
    }}/>;

class Service extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.container }>
        <div className={ classes.contentContainer }>
          <div className={ classes.content }>
            <Typography className={ classes.title } variant="h1" gutterBottom>
              Service
            </Typography>
            <Typography className={ classes.text } variant="h4" gutterBottom>
              iPar Academy provide state of the art Golf Lesson.
            </Typography>
            <Typography className={ classes.text } variant="h4" gutterBottom>
              Each individual owns an indoor driving range lane with unlimited balls during lesson.
            </Typography>
            <Typography className={ classes.text } variant="h4" gutterBottom>
              All swings are evaluated through multi-angled computer based video analyzers.
            </Typography>
            <Typography className={ classes.text } variant="h3" gutterBottom>
              $600 for 10 lessons (45 mins each)
            </Typography>
          </div>
          <div className={classes.images}>
            <Row>
              <Col xs={24} s={12} md={8}>
                <ImageCard url='/image/facility_1.jpg'/>
              </Col>
              <Col xs={24} s={12} md={8}>
                <ImageCard url='/image/facility_2.jpg'/>
              </Col>
              <Col xs={24} s={12} md={8}>
                <ImageCard url='/image/facility_3.jpg'/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Service);
