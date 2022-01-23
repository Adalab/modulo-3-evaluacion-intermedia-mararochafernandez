import '../styles/layout/form.scss';

const FormInput = (props) => {
  const handleChange = (event) => {
    props.handleInput(event.currentTarget.id, event.currentTarget.value);
  };

  return (
    <>
      <label className="form__label" htmlFor={props.id}>
        {props.label}
      </label>

      <input
        className="form__input"
        type="text"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={handleChange}
      />
    </>
  );
};

export default FormInput;
