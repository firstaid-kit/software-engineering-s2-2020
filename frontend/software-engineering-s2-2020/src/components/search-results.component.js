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
        const searchTopics = this.props.location.search.substring(3).split(',');

        if (searchTopics.length === 0) {
            axios.get('/article')

            .then((response) => {
                const data = response.data;
                this.setState({articles: data})
                console.log('data has been recevied 0');
            })
            .catch(() => {
                alert('Error retrieving data 0');
            });
        } else {
            for (var i = 0; i < searchTopics.length; i++) {
                if (searchTopics[i] === "TDD") {
                    axios.get('/article/TDDarticles')
                        .then((response) => {
                            const data = response.data;
                            this.setState({articles: data})
                            console.log("tdd articles retrieved");
                        })
                        .catch(() => {
                            alert('Error retrieving data 1');
                        });
                }
    
                if(searchTopics[i] === "BDD") {
                    axios.get('/article/BDDarticles')
                        .then((response) => {
                            const data = response.data;
                            this.setState({articles: data})
                            console.log("bdd articles retrieved");
                        })
                        .catch(() => {
                            alert('Error retrieving data 2');
                        });
                }
    
                if(searchTopics[i] === "Agile") {
                    axios.get('/article/agileArticles')
                        .then((response) => {
                            const data = response.data;
                            this.setState({articles: data})
                            console.log("agile articles retrieved");
                        })
                        .catch(() => {
                            alert('Error retrieving data 3');
                        });
                }
    
                if(searchTopics[i] === "Kanban") {
                    axios.get('/article/kanbanArticles')
                        .then((response) => {
                            const data = response.data;
                            this.setState({articles: data})
                            console.log("kanban articles retrieved");
                        })
                        .catch(() => {
                            alert('Error retrieving data 4');
                        });
                }
            }
        }
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
        console.log(this.props);

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
