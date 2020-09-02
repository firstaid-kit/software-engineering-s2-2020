import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAffiliation = this.onChangeAffiliation.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            login: '',
            password: '',
            name: '',
            email: '',
            affiliation: '',
            role: '',
            gender: '',
            age: 2
        };
    }

    onChangeLogin(e) {
        this.setState({
            login: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAffiliation(e) {
        this.setState({
            affiliation: e.target.value
        });
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            login: this.state.login,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
            affiliation: this.state.affiliation,
            role: this.state.role,
            gender: this.state.gender,
            age: this.state.age
        };

        console.log(newUser);

        axios.post('HTTP://localhost:5000/user/register/', newUser)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            });

        this.setState({
            login: '',
            password: '',
            name: '',
            email: '',
            affiliation: '',
            role: '',
            gender: '',
            age: 2           
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Login Username: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.login}
                            onChange={this.onChangeLogin}
                            />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                    </div>

                    <div className="form-group">
                        <label>Full Name: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>

                    <div className="form-group">
                        <label>Affiliation: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.affiliation}
                            onChange={this.onChangeAffiliation}
                            />
                    </div>

                    <div className="form-group">
                        <label>Role: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.role}
                            onChange={this.onChangeRole}
                            />
                    </div>

                    <div className="form-group">
                        <label>Gender: </label>
                        <input type = "text"
                            className="form-control"
                            value={this.state.gender}
                            onChange={this.onChangeGender}
                            />
                    </div>

                    <div className="form-group">
                        <label>Age: </label>
                        <input type = "number"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}