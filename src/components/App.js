import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(process.env.REACT_APP_API_BASE_URL);
      setContacts(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Wild P3</h1>
      {contacts.map((contact) => {
        return (
          <div>
            <span>{contact.first_name}</span>
            <span>{contact.last_name}</span>
            <span>{contact.email}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
