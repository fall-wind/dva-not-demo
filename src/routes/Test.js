import React from 'react';
import { connect } from 'dva';
// import styles from './Test.css';
import TestComponent from '../components/Test/Test'

function mapStateToProps(state) {
  return state.test
}

export default connect(mapStateToProps)(TestComponent);
