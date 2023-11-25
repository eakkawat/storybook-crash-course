import './button.css';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.object,
};
