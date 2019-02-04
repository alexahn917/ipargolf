import React from 'react';
import { Layout } from 'antd';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import About from './About';
import Service from './Service';
import Staff from './Staff';
import Contact from './Contact';
import './home.css';

const { Header, Content, Footer } = Layout;

const styles = theme => ({
  container: {
    display: 'flex',
  },
  header: {
    backgroundImage: 'url(/image/title.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    padding: '0',
  },
  headerText: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    color: 'white',
  },
  subtitle: {
    color: '#b8b8b8',
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout className="container">
        <Header className={ classes.header }>
          <div className={ classes.headerText }>
            <Typography className={ classes.title } variant="h1" gutterBottom>
              iPar Golf Academy
            </Typography>
            <Typography className= {classes.subtitle } variant="h3">
              We Make Golf Easy
            </Typography>
          </div>
        </Header>
        <Content>
          <About/>
          <Service/>
          <Staff/>
          <Contact/>
        </Content>
        <Footer style={{ backgroundColor: 'rgba(114, 152, 104, 1)', textAlign: 'center' }}>
          <Typography className={ classes.title } variant="h4" gutterBottom>
            iPar Golf Academy, 1088 Kiely Blvd, Santa Clara, CA 95051
          </Typography>
        </Footer>
      </Layout>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
