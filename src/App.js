import React, { Component } from 'react';
import { get } from 'axios';
import Loader from './components/Loader/Loader';
import Card from './components/Card/Card';

import './App.css';

class App extends Component {

  state = {
    isLoading: true,
    users: null
  }

  async componentDidMount() {
    try {
      const { data: { results } } = await get('https://randomuser.me/api/?results=10');
      this.setState((state) => ({ ...state, users: results, isLoading: false }));
    } catch (error) {
      console.log(error)
    }
  }

  renderUsers = () => {
    const { users } = this.state;

    return users.map((user) => {
      return (
        <Card
          key={user.login.uuid}
          user={user}
        />
      )
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        {isLoading && <Loader />}
        {!isLoading && this.renderUsers()}
      </div>
    );
  }
}

export default App;
