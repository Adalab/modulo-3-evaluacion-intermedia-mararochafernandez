import '../styles/layout/form.scss';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const FormSearch = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <fieldset className="form__fieldset">
        <FormInput
          label="Nombre:"
          name="searchName"
          id="searchName"
          value={props.searchName}
          handleInput={props.handleInputChange}
        />
      </fieldset>

      <fieldset className="form__fieldset">
        <FormSelect
          label="Tutora:"
          name="searchCounselor"
          id="searchCounselor"
          options={props.counselors}
          value={props.searchCounselor}
          handleSelect={props.handleInputChange}
        />
      </fieldset>
    </form>
  );
};

export default FormSearch;
