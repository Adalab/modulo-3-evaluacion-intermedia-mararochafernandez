import '../styles/layout/form.scss';

const FormButton = (props) => {
  const handleClick = () => {
    props.handleButton();
  };

  return (
    <input
      className="form__button"
      type="submit"
      value={props.text}
      title={props.isDisabled ? null : props.text}
      disabled={props.isDisabled}
      onClick={handleClick}
    />
  );
};

export default FormButton;
