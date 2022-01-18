import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
//import localStorage from '../services/localstorage';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state
  const [adalabers, setAdalabers] = useState([]);

  // api
  useEffect(() => {
    callToApi().then((response) => {
      setAdalabers(response);
    });
  }, []);

  // local storage

  //const [name, setName] = useState(localStorage.get('name', ''));
  //const [email, setEmail] = useState(localStorage.get('email', ''));

  //useState(localStorage.get('data', {}).name || '');
  //useState(localStorage.get('data', {}).email || '');

  /*
  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('email', email);
  }, [name, email]);
  */

  /*
  localStorage.set('data', {
    name: name,
    email: email,
  });
  */

  // render helpers
  const renderHeader = (title) => {
    <h1>{title}</h1>;
  };

  return (
    // HTML ✨

    <div className="app">
      <header>{renderHeader('Adalabers')}</header>
    </div>
  );
}

export default App;
