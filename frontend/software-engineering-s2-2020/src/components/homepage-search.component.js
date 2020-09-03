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
            dateFrom: new Date(),
            dateTo: new Date()
        };
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
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
        console.log("submit function called");
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
        // window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Search</h3>
                <form>
                    <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                   
                    <div className="form-group">
                        <label>Date Range: </label>
                        <div>
                            <DatePicker
                                selected={this.state.dateFrom}
                                onChange={this.onChangeDateFrom}
                                />
                        </div>
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
                            className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}