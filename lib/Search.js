import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="Search">
    	<input type="search" placeholder="Search by city or zip for Weatherly Forecast" />
			<button onClick={() => console.log('clicked!')}>
			Search
			</button>
		</div>
  )
}

export default Search;

// import React, { Component } from 'react';

// export default class EvilDeedsToDo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: '',
//       toDoList: ['poison a bunch of apples']
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Evil Deeds To Do:</h2>
//         <input value={this.state.value}
//                onChange={(event) => this.setState({ value: event.target.value })}
//         />
//         <button onClick={() => {
//           const updatedArray = this.state.toDoList;
//           updatedArray.push(this.state.value);
//           this.setState({ toDoList: updatedArray, value: '' });
//         }}>
//           Submit
//         </button>
//         <ul>
//           { this.state.toDoList.map((toDo, index) => <li key={index}>{toDo}</li>) }
//         </ul>
//       </div>
//     )
//   }
// }
