import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    history: PropTypes.object.isRequired
  };

  get router() {
    return (
      <Router history={this.props.history}>
        { this.props.routes }
      </Router>
    );
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          { this.router }
        </div>
      </Provider>
    );
  }
}
