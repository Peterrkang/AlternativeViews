import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.css';
import { Route } from 'react-router-dom';

class Home extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <Route
        render={({ history }) => (
          <React.Fragment>
            <form
              onSubmit={() => history.push(`/topics/${this.state.inputValue}`)}
            >
              <label>
                Search News Articles:
                <input
                  type="text"
                  value={this.state.inputValue}
                  onChange={e => this.handleInputChange(e)}
                />
              </label>
              <input type="submit" value="Search Topic" />
            </form>
          </React.Fragment>
        )}
      />
    );
  }
}

export default withStyles(styles)(Home);
