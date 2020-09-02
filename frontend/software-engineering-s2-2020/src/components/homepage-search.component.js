import React, { Component } from 'react';
//import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class HomepageSearch extends Component {
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
                            //value={}
                            //onChange={}
                            />
                    </div>
                   
                    <div className="form-group">
                        <label>Date Range: </label>
                        <div>
                            <DatePicker
                                //selected={this.state.date}
                                //onChange={this.onChangeDate}
                                />
                        </div>
                        <label> to </label>
                        <div>
                            <DatePicker
                                //selected={this.state.date}
                                //onChange={this.onChangeDate}
                                />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            className="btn btn-primary"
                            value="Go"
                            />
                    </div>
                </form>
            </div>
        )
    }
}
