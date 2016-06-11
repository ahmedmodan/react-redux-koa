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
        <div className="row">
          <div className="col offset-s6">
            <DisplayNumber numToDisplay={this.props.counter} />
          </div>
        </div>
        <div className="row">
          <div className="col offset-s3 offset-m4">
            <div className="col s12 m4">
              <button className="btn" onClick={this.handleDecrement}>decrement</button>
            </div>
            <div className="col s12 m4">
              <button className="btn" onClick={this.handleIncrement}>increment</button>
            </div>
            <div className="col s12 m4">
              <button className="btn" onClick={this.handleAddAsync}>Async Add</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s2 offset-m3 s12 m4">
            <Link className="btn" to="/counter/hello">Let's do some routing</Link>
          </div>
          <div className="col offset-s2 s12 m4">
            <Link className="btn" to="/">Back to the Homepage</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, counterActions)(Counter);
