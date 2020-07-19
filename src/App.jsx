
import './index.scss';

import React, { Component } from "react";
import Routes from './routes/index';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getProducts } from './store/actions/products';

class App extends Component {

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return(
      <div className="app">
        <Routes />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ getProducts }, dispatch);

export default connect(null, mapDispatchToProps)(App)