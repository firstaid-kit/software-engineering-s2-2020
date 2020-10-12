import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    getArticles = () => {
        axios.get('HTTP://localhost:5000/article')
            .then((response) => {
                const data = response.data;
                this.setState({articles: data})
                console.log('data has been recevied');
            })
            .catch(() => {
                alert('Error retrieving data');
            });
    }

    // FELIX: there are two places that need to be edited to display the search results: AND ADD INTO A TABLE
    // this function (displayArticles) and where displayArticles is called in the render function
    displayArticles = (articles) => {
        if(!articles.length) return null;

        return articles.map((article, index) => (
            <tr keys={index}>
            <td>{article.author}</td>
            <td>{article.title}</td>
            <td>{article.year}</td>
            <td>{article.doi}</td>
          </tr>
        ));
    };

    componentDidMount = () => {
        this.getArticles();
    };

    render() {
        return (
            <div>
                <h3>Displaying your search results</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Digital object identifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayArticles(this.state.articles)}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}