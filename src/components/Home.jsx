import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const { Header, Content, Footer } = Layout;

const styles = theme => ({
  header: {
    textAlign: 'center',
  },
  title: {
    color: 'white',
    padding: '20px',
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout className="layout">
        <Header className={ classes.header }>
          <Typography className={ classes.title } variant="title" gutterBottom>
            IPar Golf Academy
          </Typography>
        </Header>
        <Content>
          <div style={{ background: 'white', padding: 24, minHeight: 280 }}>Content1</div>
          <div style={{ background: 'skyblue', padding: 24, minHeight: 280 }}>Content2</div>
          <div style={{ background: 'blue', padding: 24, minHeight: 280 }}>Content3</div>
          <div style={{ background: 'purple', padding: 24, minHeight: 280 }}>Content4</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
