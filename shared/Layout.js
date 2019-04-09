import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './style.css';

const App = props => (
  <div>
    <h1 className={styles.hot}>Hello App 123</h1>
    <img src="/head.jpg" />
    <Link to="/pages/productA/index"><button>A</button></Link>
    <Link to="/pages/productB/index"><button>B</button></Link>
    { props.children }
  </div>
);
export default App;
