import React, {useState,useEffect} from 'react';
import Form from './Form';
import List from './List';
import './App.css';

function App() {
  const [submittedAuthors, setSubmittedAuthors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleFormSubmit = (authorName) => {
    setSubmittedAuthors([...submittedAuthors, authorName]);
  };

  return (
    <div className="App">
      <h1>Asessement, Question 1 App</h1>
      <Form onSubmit={handleFormSubmit} />
      <List authors={submittedAuthors} />
      <h2>List of user extracted from the link: </h2>
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
