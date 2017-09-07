import React from 'react';
import { connect } from 'dva';
// import styles from './Test.css';
import TestComponent from '../components/Test/Test'

// function Test() {
//   return (
//     <div className={styles.normal}>
//       Route Component: Test
//     </div>
//   );
// }

function mapStateToProps(state) {
  return state.test
}

export default connect(mapStateToProps)(TestComponent);
