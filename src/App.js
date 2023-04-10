import Navbar from './components/Navbar';
import Search from './components/Search';
import UserList from './components/UserList';
import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      users: []
    }
  }

  searchUsers = (keyword) => {
    this.setState({ loading: true })
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => this.setState({ users: data.items, loading: false }));
    }, 1000);
  }

  clearResults = () => {
    this.setState({ users: [] })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearResults={this.clearResults}
          showClearButton={this.state.users.length > 0 ? true : false} />
        <div className="container mt-3">
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}
export default App

