import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
//import data from '../data/promo-patata';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });
  const [searchName, setSearchName] = useState('');
  const [searchCounselor, setSearchCounselor] = useState('');

  // api
  useEffect(() => {
    callToApi().then((response) => {
      setAdalabers(response);
    });
  }, []);

  // event handlers

  const handleForm = (event) => {
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

  const handleSearchNameInput = (event) => {
    setSearchName(event.currentTarget.value);
  };

  const handleSearchCounselorInput = (event) => {
    if (event.currentTarget.value === 'Todas') {
      setSearchCounselor('');
    } else {
      setSearchCounselor(event.currentTarget.value);
    }
  };

  // render helpers

  const renderHeader = (title) => {
    return <h1>{title}</h1>;
  };

  const renderAdalabers = () => {
    return adalabers
      .filter(
        (adalaber) =>
          adalaber.name
            .toLocaleLowerCase()
            .includes(searchName.toLocaleLowerCase()) &&
          adalaber.counselor
            .toLocaleLowerCase()
            .includes(searchCounselor.toLocaleLowerCase())
      )
      .map((adalaber, index) => (
        <tr key={index}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
          {renderSocialNetworks(adalaber.social_networks)}
        </tr>
      ));
  };

  const renderSocialNetworks = (socialNetworks) => {
    if (socialNetworks && socialNetworks.length > 0) {
      return socialNetworks.map((socialNetwork, index) => (
        <td key={index}>
          <a href={socialNetwork.url}>{socialNetwork.name}</a>
        </td>
      ));
    }
  };

  const getColspan = () => {
    const colspan = adalabers.reduce((max, adalaber) => {
      if (adalaber.social_networks && max < adalaber.social_networks.length) {
        max = adalaber.social_networks.length;
      }
      return max;
    }, 0);

    return colspan ? colspan : null;
  };

  return (
    // HTML ✨

    <div className="app">
      <header>{renderHeader('Adalabers')}</header>

      <main>
        <section>
          <form onSubmit={handleForm}>
            <label htmlFor="searchName">Nombre:</label>
            <input
              type="text"
              name="searchName"
              id="searchName"
              value={searchName}
              onChange={handleSearchNameInput}
            />

            <label htmlFor="searchCounselor">Tutora:</label>
            <select
              name="searchCounselor"
              value={searchCounselor}
              onChange={handleSearchCounselorInput}
            >
              <option defaultValue>Todas</option>
              <option>Yanelis</option>
              <option>Dayana</option>
              <option>Iván</option>
            </select>
          </form>
        </section>

        <section>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
                <th colSpan={getColspan()}>Redes sociales</th>
              </tr>
            </thead>

            <tbody>{renderAdalabers()}</tbody>
          </table>
        </section>

        <section>
          <h2>Añadir nueva Adalaber</h2>

          <form onSubmit={handleForm}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newAdalaber.name}
              onChange={handleNewAdalaberInput}
            />

            <label htmlFor="counselor">Tutora:</label>
            <input
              type="text"
              name="counselor"
              id="counselor"
              value={newAdalaber.counselor}
              onChange={handleNewAdalaberInput}
            />

            <label htmlFor="speciality">Especialidad:</label>
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
