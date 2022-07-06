// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [comments, setComments] = useState([]);
  const [filters, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const starting = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    setComments(data);
    setFilter(data);
  }

  useEffect(() => {
    starting();
  }, []);

  function handleChange(value) {
    const searched = comments.filter(comment => {
      return comment.postId === parseInt(value);
    }
    );
    setFilter(searched);
  }


  return (

    <div style={{padding: '40px'}}>

      <div style={{padding: '0px 40px'}}>
        <h1>Comments</h1>
        <input
          type="text"
          value={search}
          placeholder="Search by postId"
          onChange={e => setSearch(e.target.value)}
        ></input>
        <button
          onClick={() => handleChange(search)}
        >Search</button>
      </div>

      <table>
        <tr>
          <th>ID</th>
          <th>PostID</th>
          <th>Email</th>
          <th>Comments</th>
        </tr>
        {filters.map(filter => (
          <tr key={filter.id}>
            <td>{filter.id}</td>
            <td>{filter.postId}</td>
            <td>{filter.email}</td>
            <td>{filter.name}</td>
          </tr>
        ))}
      </table>
    </div>
  )

}

export default App;
