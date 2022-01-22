import '../styles/Search.scss';

const NewAdalaber = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form form--add" onSubmit={handleForm}>
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="name">
          Nombre:
        </label>

        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          value={props.newAdalaber.name}
          onChange={props.handleNewAdalaberInput}
        />

        <label className="form__label" htmlFor="counselor">
          Tutora:
        </label>

        <input
          className="form__input"
          type="text"
          name="counselor"
          id="counselor"
          value={props.newAdalaber.counselor}
          onChange={props.handleNewAdalaberInput}
        />

        <label className="form__label" htmlFor="speciality">
          Especialidad:
        </label>

        <input
          className="form__input"
          type="text"
          name="speciality"
          id="speciality"
          value={props.newAdalaber.speciality}
          onChange={props.handleNewAdalaberInput}
        />

        <input
          className="form__button"
          type="submit"
          value="Añadir nueva Adalaber"
          onClick={props.handleNewAdalaberButton}
        />
      </fieldset>
    </form>
  );
};

export default NewAdalaber;
