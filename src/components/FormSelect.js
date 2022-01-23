import '../styles/layout/form.scss';

const FormSelect = (props) => {
  const handleChange = (event) => {
    if (event.currentTarget.value === 'Todas') {
      props.handleSelect(event.currentTarget.id, '');
    } else {
      props.handleSelect(event.currentTarget.id, event.currentTarget.value);
    }
  };

  const renderOptions = () => {
    return props.options.map((option, index) => (
      <option key={index}>{option}</option>
    ));
  };

  return (
    <>
      <label className="form__label" htmlFor={props.id}>
        {props.label}
      </label>

      <select
        className="form__input"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={handleChange}
      >
        <option defaultValue>Todas</option>
        {renderOptions()}
      </select>
    </>
  );
};

export default FormSelect;
