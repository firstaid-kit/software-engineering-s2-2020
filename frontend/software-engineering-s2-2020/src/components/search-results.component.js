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

    // FELIX: there are two places that need to be edited to display the search results:
    // this function (displayArticles) and where displayArticles is called in the render function
    displayArticles = (articles) => {
        if(!articles.length) return null;

        return articles.map((article, index) => (
            <div keys={index}>
                <p>{article.author}</p>
                <p>{article.title}</p>
                <p>{article.year}</p>
                <p>{article.doi}</p>
            </div>
        ));
    };

    componentDidMount = () => {
        console.log(this.props);
        this.getArticles();
    };

    render() {
        return (
            <div>
                <h3>Displaying your search results</h3>
                    {this.displayArticles(this.state.articles)}
            </div>
        );
    }
}