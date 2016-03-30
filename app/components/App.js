import React, {PropTypes} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default class App extends React.Component {
  render() {
    return (<div>
      <Navbar history={this.props.history}/>
      {this.props.children} - 2 mine
      <Footer />
    </div>);
  }
}

App.propTypes = {
};
