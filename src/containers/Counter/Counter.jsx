import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as counterActions } from '../../redux/modules/counterReducer';
import DisplayNumber from '../../components/displayNumber/displayNumber';

const mapStateToProps = (state) => ({
  counter: state.counter
});

// this is a smart component. it contains a dumb component (DisplayNumber) to help display logic
export class Counter extends React.Component {
  static propTypes = {
    counter: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    addAsync: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleIncrement = ::this.handleIncrement;
    this.handleDecrement = ::this.handleDecrement;
    this.handleAddAsync = ::this.handleAddAsync;
  }

  handleIncrement() {
    this.props.increment();
  }

  handleDecrement() {
    this.props.decrement();
  }

  handleAddAsync() {
    this.props.addAsync();
  }

  render() {
    return (
      <div>
        <DisplayNumber numToDisplay={this.props.counter} />
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleAddAsync}>Async Add</button>
        <Link to="/counter/hello">Let's do some routing</Link>
        <Link to="/">Back to the Homepage</Link>
      </div>
    );
  }
}
export default connect(mapStateToProps, counterActions)(Counter);
