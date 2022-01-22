import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import data from '../data/promo-patata';
import Header from './Header';
import Search from './Search';
import AdalabersList from './AdalabersList';
import NewAdalaber from './NewAdalaber';
import Footer from './Footer';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state
  const [adalabers, setAdalabers] = useState(data.results);
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
        <tr key={index} className="table__tr">
          <td className="table__td">{adalaber.name}</td>
          <td className="table__td">{adalaber.counselor}</td>
          <td className="table__td">{adalaber.speciality}</td>
          <td className="table__td table__td--social-networks">
            {adalaber.social_networks && adalaber.social_networks.length > 0
              ? renderSocialNetworks(adalaber.social_networks)
              : '-'}
          </td>
        </tr>
      ));
  };

  const renderSocialNetworks = (socialNetworks) => {
    if (socialNetworks && socialNetworks.length > 0) {
      return socialNetworks.map((socialNetwork, index) => (
        <a
          key={index}
          className="social-network"
          href={socialNetwork.url}
          title={socialNetwork.name}
        >
          {socialNetwork.name}
        </a>
      ));
    }
  };

  return (
    // HTML ✨

    <div className="page">
      <Header title="Adalabers" />

      <main className="main">
        <div className="main__wrapper">
          <Search
            searchName={searchName}
            searchCounselor={searchCounselor}
            handleSearchNameInput={handleSearchNameInput}
            handleSearchCounselorInput={handleSearchCounselorInput}
          />

          <AdalabersList renderAdalabers={renderAdalabers} />
        </div>
      </main>

      <Header subtitle="Nueva Adalaber" />

      <section className="main">
        <div className="main__wrapper">
          <NewAdalaber
            newAdalaber={newAdalaber}
            handleNewAdalaberInput={handleNewAdalaberInput}
            handleNewAdalaberButton={handleNewAdalaberButton}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
