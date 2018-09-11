import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./styles.css";

class Home extends Component {
  render() {
    return <div className={styles.home}>Home</div>;
  }
}

export default withStyles(styles)(Home);
