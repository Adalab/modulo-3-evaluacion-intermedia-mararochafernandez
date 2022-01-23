import '../styles/layout/form.scss';
import FormInput from './FormInput';
import FormButton from './FormButton';

const FormNewAdalaber = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  const isDisabled =
    props.newAdalaber.name &&
    props.newAdalaber.counselor &&
    props.newAdalaber.speciality
      ? false
      : true;

  return (
    <form className="form form--new" onSubmit={handleForm}>
      <fieldset className="form__fieldset">
        <FormInput
          label="Nombre:"
          name="name"
          id="name"
          value={props.newAdalaber.name}
          handleInput={props.handleInputChange}
        />

        <FormInput
          label="Tutora:"
          name="counselor"
          id="counselor"
          value={props.newAdalaber.counselor}
          handleInput={props.handleInputChange}
        />

        <FormInput
          label="Especialidad:"
          name="speciality"
          id="speciality"
          value={props.newAdalaber.speciality}
          handleInput={props.handleInputChange}
        />

        <FormButton
          text="Añadir nueva Adalaber"
          handleButton={props.handleButtonClick}
          isDisabled={isDisabled}
        />
      </fieldset>
    </form>
  );
};

export default FormNewAdalaber;
