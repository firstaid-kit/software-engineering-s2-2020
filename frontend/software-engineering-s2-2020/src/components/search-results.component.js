// import React, { Component } from 'react';
// import collections from 'C:\Users\kirst\Documents\GitHub\software-engineering-s2-2020\backend\collections\article.json';

// // import axios from 'axios';

// export default class Search extends Component {
//     constructor(props) {
//         super(props);
        
//         this.getKeys = this.getKeys.bind(this); // returns the list of headings to be displayed on top of table (fetched from the key passed in JSON)
//         this.getHeader = this.getHeader.bind(this); // contains the logic to return the header
//         this.getRowsData = this.getRowsData.bind(this); // contains the logic for the body of the table

//         getKeys = function() {
//             return collections.keys(this.props.data[0]);
//         }

//         getHeader = function() {
//             var keys = this.getKeys();
//             return keys.map((key, index) => {
//                 return <th key={key}>{key.toUpperCase()}</th>
//             })
//         }

//         getRowsData = function() {
//             var items = this.props.data;
//             var keys = this.getKeys();
//             return items.map((row, index)=>{
//             return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
//             })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Displaying your search results</h3>

//                 <table>
//                     <thead>
//                         <tr>{this.getHeader()}</tr>
//                     </thead>
//                     <tbody>
//                         {this.getRowsData()}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// const RenderRow = (props) => {
//     return props.keys.map((key, index)=>{
//         return <td key={props.data[key]}>{props.data[key]}</td>
//         })
// }