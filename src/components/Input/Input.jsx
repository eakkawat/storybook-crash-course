import PropTypes from 'prop-types';
import './input.css';

function Input(props) {
  const { size = 'md', placeholder, ...rest } = props;

  return (
    <input
      type='text'
      className={`input-text ${size}`}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default Input;

Input.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
  rest: PropTypes.object,
};
