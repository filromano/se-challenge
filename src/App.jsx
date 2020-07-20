
import './index.scss';

import React, { Component } from "react";
import Routes from './routes/index';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getProducts } from './store/actions/products';
import { getBrands } from './store/actions/brands';

class App extends Component {

  componentDidMount() {
    this.props.getProducts();
    this.props.getBrands();
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
  bindActionCreators({ getProducts, getBrands }, dispatch);

export default connect(null, mapDispatchToProps)(App)