import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class HomepageSearch extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateFrom = this.onChangeDateFrom.bind(this);
        this.onChangeDateTo = this.onChangeDateTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            selectedTopic: "TDD",
            dateFrom: new Date(),
            dateTo: new Date()
        };
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleTopicChange = changeEvent => {
        this.setState({
            selectedTopic: changeEvent.target.value
        });
    }

    onChangeDateFrom(date) {
        this.setState({
            dateFrom: date
        });
    }

    onChangeDateTo(date) {
        this.setState({
            dateTo: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const search = {
            description: this.state.description,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo
        }

        console.log(search);

        // TO DO:
        axios.post('HTTP://localhost:5000/search/newSearch/', search)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            })
        window.location = '/search?a=' + selectedCheckboxes;
    }

    render() {
        return (
            <div className="container">
                <h3>Search</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>

                    <label>Software Engineering Topics: </label>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                value="TDD"
                                checked={this.state.selectedTopic === "TDD"}
                                onChange={this.handleTopicChange}
                                className="form-check-input"
                                />
                        TDD
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                value="BDD"
                                checked={this.state.selectedTopic === "BDD"}
                                onChange={this.handleTopicChange}
                                className="form-check-input"
                                />
                        BDD
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                value="BDD"
                                checked={this.state.selectedTopic === "BDD"}
                                onChange={this.handleTopicChange}
                                className="form-check-input"
                                />
                        Pair Programming
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                value="BDD"
                                checked={this.state.selectedTopic === "BDD"}
                                onChange={this.handleTopicChange}
                                className="form-check-input"
                                />
                        Planning Poker
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                value="BDD"
                                checked={this.state.selectedTopic === "BDD"}
                                onChange={this.handleTopicChange}
                                className="form-check-input"
                                />
                        Daily Stand Up
                        </label>
                    </div>
                   
                    <div className="form-group">
                        <label>Date Range: </label>
                        <div>
                            <DatePicker
                                selected={this.state.dateFrom}
                                onChange={this.onChangeDateFrom}
                                />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> to </label>
                        <div>
                            <DatePicker
                                selected={this.state.dateTo}
                                onChange={this.onChangeDateTo}
                                />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            value="Go"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}