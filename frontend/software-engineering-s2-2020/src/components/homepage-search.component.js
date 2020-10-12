import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from './checkbox.component';

const OPTIONS = ["TDD", "BDD", "Agile", "Kanban"];

export default class HomepageSearch extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateFrom = this.onChangeDateFrom.bind(this);
        this.onChangeDateTo = this.onChangeDateTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            checkboxes: OPTIONS.reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            ),
            dateFrom: new Date(),
            dateTo: new Date()
        };
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleCheckboxChange = changeEvent => {
        const {name} = changeEvent.target;

       this.setState(prevState => ({
           checkboxes: {
               ...prevState.checkboxes,
               [name]: !prevState.checkboxes[name]
           }
       }));
    }
    
    createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
            />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

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

        const selectedCheckboxes = [];
        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                console.log(checkbox, "is selected");
                selectedCheckboxes.push(checkbox);
            })
    
        const search = {
            description: this.state.description,
            checkboxes: selectedCheckboxes,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo
        }

        

        console.log(search);

        axios.post('HTTP://localhost:5000/search/newSearch/', search)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            })
        window.location = '/search';
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
                    {this.createCheckboxes()}
                   
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