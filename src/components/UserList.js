import React, { Component } from 'react'
import User from './User';

export class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: "85648539",
                    name: "Fatih",
                    username: "fatihcihan",
                    avatar_url: "https://avatars.githubusercontent.com/u/85648539?v=4",
                    github_url: "https://github.com/fatihcihan",
                    followers: "8"
                },
                {
                    id: "1",
                    name: "Okan",
                    username: "okanbozok",
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    github_url: "https://github.com/mojombo",
                    followers: "20"
                },
                {
                    id: "2",
                    name: "Ekrem",
                    username: "ekremuysal",
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    github_url: "https://github.com/defunkt",
                    followers: "30"
                },
                {
                    id: "3",
                    name: "Onur",
                    username: "onursenelli",
                    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
                    github_url: "https://github.com/pjhyett",
                    followers: "40"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <User user={user} key={user.id} />
                ))}
            </div>
        )
    }
}

export default UserList