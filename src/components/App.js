import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });

  // api
  useEffect(() => {
    callToApi().then((response) => {
      setAdalabers(response);
    });
  }, []);

  // event handlers

  const handleNewAdalaberForm = (event) => {
    event.preventDefault();
  };

  const handleNewAdalaberInput = (event) => {
    setNewAdalaber({
      ...newAdalaber,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleNewAdalaberButton = () => {
    if (newAdalaber.name && newAdalaber.counselor && newAdalaber.speciality) {
      setAdalabers([...adalabers, newAdalaber]);
      setNewAdalaber({
        name: '',
        counselor: '',
        speciality: '',
      });
    }
  };

  // render helpers

  const renderHeader = (title) => {
    <h1>{title}</h1>;
  };

  const renderAdalabers = () => {
    return adalabers.map((adalaber, index) => (
      <tr key={index}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
      </tr>
    ));
  };

  return (
    // HTML ✨

    <div className="app">
      <header>{renderHeader('Adalabers')}</header>

      <main>
        <section>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
              </tr>
            </thead>

            <tbody>{renderAdalabers()}</tbody>
          </table>
        </section>

        <section>
          <h2>Añadir nueva Adalaber</h2>

          <form onSubmit={handleNewAdalaberForm}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newAdalaber.name}
              onChange={handleNewAdalaberInput}
            />

            <label htmlFor="name">Tutora:</label>
            <input
              type="text"
              name="counselor"
              id="counselor"
              value={newAdalaber.counselor}
              onChange={handleNewAdalaberInput}
            />

            <label htmlFor="name">Especialidad:</label>
            <input
              type="text"
              name="speciality"
              id="speciality"
              value={newAdalaber.speciality}
              onChange={handleNewAdalaberInput}
            />

            <input
              type="submit"
              value="Añadir nueva Adalaber"
              onClick={handleNewAdalaberButton}
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
