import React from 'react';
import { connect } from 'react-redux';

import * as styles from './style.less';

if (typeof window === 'undefined') {
  console.log(styles)
}

class A extends React.Component {
  render() {
    return (
      <div className={styles['carousel-wrap']}>
        <i />
        <div className={styles.hot}></div>
        { this.props.todos }
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.pagesProductA,
}))(A);
