import React, { Component } from 'react';
// import axios from 'axios';
import '../App.css';

export default class About extends Component {

    render() {
        return (
            <div>
                <img href='../images/about_us.jpg' alt='About_US IMG'></img>
                <h2 id='about_us'>About Us</h2>

                <article>
                    <p class='padding'>
                        Software Engineering Evidence Repository or SEER is a 
                        searchable database of evidence which has been curated by the Software Engineering experts developed in the
                        Research lab (SERL) which is based in AUT. Users will be able to search for evidence related to claims about
                        software engineering by searching this database which will redirect them to the relevant published
                        research evidence. For example, if the user is wondering if the claim is true that using a TDD as a way of
                        working improves code quality. They can search SEER for TDD and code quality and get a list of
                        empirical research articles related to this with a summary of each related to the study, the measures
                        and the results. To access the full article users will have to access the appropriate publisher’s
                        database, this will result pre-publishing versions available on databases like arXiv.org. 
                    </p>
                </article>

                <h2>Motivation</h2>
                <article>
                    <p class='padding'>
                        I am passionate about Evidence-based software engineering and I want to support developers’
                        decisions about the use of different practices based on evidence and experience rather than largely
                        unsubstantiated claims. There is a lot of evidence documented in Research papers but this is
                        unavailable to many commercial software engineers because it is behind a paywall, is written in
                        unfamiliar academic language and it is high effort to find the trends. This is where the product I am
                        proposing can help. 
                    </p>    
                </article>
                

            </div>
        )
    }
}