import React, { Component } from 'react'
import history from '../history';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal.jsx';
import GoalList from './GoalList.jsx';
import CompleteGoalList from './CompleteGoalList.jsx';

class App extends Component { 
  signOut() {
    firebaseApp.auth().signOut();
    history.replace('/signin');
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr/>
        <h4>Goals</h4>
        <GoalList /> 
        <hr/>
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <hr/>
        <button
          type="button"
          className="btn btn-danger"
          onClick={ () => this.signOut() }
        >
        Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null)(App);
