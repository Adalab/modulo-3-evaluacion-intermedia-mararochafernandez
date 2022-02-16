import '../styles/components/App.scss';
import { useEffect, useState } from 'react';
//import callToApi from '../services/api';
import ls from '../services/localstorage';
import data from '../data/promo-patata';
import Header from './Header';
import FormSearch from './FormSearch';
import AdalabersList from './AdalabersList';
import FormNewAdalaber from './FormNewAdalaber';
import Footer from './Footer';
import { nanoid as uuid } from 'nanoid';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state

  const [adalabers, setAdalabers] = useState(ls.get('adalabers', data.results));
  const [newAdalaber, setNewAdalaber] = useState(
    ls.get('newAdalaber', {
      name: '',
      counselor: '',
      speciality: '',
    })
  );
  const [searchName, setSearchName] = useState('');
  const [searchCounselor, setSearchCounselor] = useState('');

  // api

  /*useEffect(() => {
    if (adalabers.length === 0) {
      callToApi().then((response) => {
        setAdalabers(response);
      });
    }
  }, []);*/
  // local storage

  useEffect(() => {
    ls.set('adalabers', adalabers);
    ls.set('newAdalaber', newAdalaber);
  }, [adalabers, newAdalaber]);

  // event handlers

  const handleInputChange = (id, value) => {
    if (id === 'searchName') {
      setSearchName(value);
    } else if (id === 'searchCounselor') {
      setSearchCounselor(value);
    } else {
      setNewAdalaber({
        ...newAdalaber,
        [id]: value,
      });
    }
  };

  const handleButtonClick = () => {
    if (newAdalaber.name && newAdalaber.counselor && newAdalaber.speciality) {
      newAdalaber.id = uuid();
      setAdalabers([...adalabers, newAdalaber]);
      setNewAdalaber({
        name: '',
        counselor: '',
        speciality: '',
      });
    }
  };

  // array with unique values (remove duplicates): https://stackoverflow.com/a/14438954/17472294
  const counselors = adalabers
    .map((adalaber) => adalaber.counselor)
    .sort()
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    // HTML ✨

    <div className="page">
      <Header title="Adalabers" />

      <main className="main">
        <div className="main__wrapper">
          <FormSearch
            searchName={searchName}
            searchCounselor={searchCounselor}
            counselors={counselors}
            handleInputChange={handleInputChange}
          />

          <AdalabersList
            adalabers={adalabers}
            searchName={searchName}
            searchCounselor={searchCounselor}
          />
        </div>
      </main>

      <Header subtitle="Nueva Adalaber" />

      <section className="main">
        <div className="main__wrapper">
          <FormNewAdalaber
            newAdalaber={newAdalaber}
            handleInputChange={handleInputChange}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
