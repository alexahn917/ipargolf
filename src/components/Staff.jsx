import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'antd';

const styles = theme => ({
  container: {
    backgroundImage: 'url(/image/staff.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  content: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 0px 50px 0px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
  },
  text: {
    color: '#c6c3c3',
  },
  desc: {
    padding: '50px',
    borderRadius: '10px',
    margin: '20px',
    backgroundColor: 'rgba(109, 133, 114, 0.8)',
  },
});

const ImageCard = ({ url }) =>
    <div className="imageCard" style={{
      borderRadius: '10px',
      margin: '20px',
      minHeight: '400px',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}/>;

class Staff extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.container }>
        <div className={ classes.contentContainer }>
          <div className={ classes.content }>
            <Typography className={ classes.title } variant="h1">
              Michael Jung
            </Typography>
            <Typography className={ classes.text } variant="h2">
              Instructor
            </Typography>
          </div>
          <div className={classes.images}>
            <Row>
              <Col xs={24} s={12} md={12}>
                <ImageCard url='/image/lesson_1.jpg'/>
              </Col>
              <Col xs={24} s={12} md={12}>
                <div className={ classes.desc }>
                  <Typography className={ classes.title } variant="h4" gutterBottom>
                    Experience:
                    <Typography className={ classes.title } variant="h6">
                      PGA
                    </Typography>
                  </Typography>
                  <Typography className={ classes.title } variant="h4" gutterBottom>
                    Years:
                    <Typography className={ classes.title } variant="h6">
                      Since 2000
                    </Typography>
                  </Typography>
                  <Typography className={ classes.title } variant="h4" gutterBottom>
                    Specialty:
                    <Typography className={ classes.title } variant="h6">
                      Step-by-step video analysis based instructions
                    </Typography>
                  </Typography>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Staff);
