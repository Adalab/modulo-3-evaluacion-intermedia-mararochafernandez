import '../styles/Search.scss';

const Search = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="searchName">
          Nombre:
        </label>

        <input
          className="form__input"
          type="text"
          name="searchName"
          id="searchName"
          value={props.searchName}
          onChange={props.handleSearchNameInput}
        />
      </fieldset>

      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="searchCounselor">
          Tutora:
        </label>

        <select
          className="form__input"
          name="searchCounselor"
          value={props.searchCounselor}
          onChange={props.handleSearchCounselorInput}
        >
          <option defaultValue>Todas</option>
          <option>Yanelis</option>
          <option>Dayana</option>
          <option>Iván</option>
        </select>
      </fieldset>
    </form>
  );
};

export default Search;
