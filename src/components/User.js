import React, { Component } from 'react'

export class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "85648539",
            name: "Fatih",
            username: "fatihcihan",
            avatar_url: "https://avatars.githubusercontent.com/u/85648539?v=4",
            github_url: "https://github.com/fatihcihan",
            followers: "8"
        }
    }

    render() {
        return (

            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-md-3">
                        <img className='img-fluid rounded-start' src={this.state.avatar_url} alt={this.state.name} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className='card-title'>{this.state.name}</h3>
                            <p>Followers: {this.state.followers}</p>
                            <a target='_blank' href={this.state.github_url} className='btn btn-primary'>Github Profile</a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default User