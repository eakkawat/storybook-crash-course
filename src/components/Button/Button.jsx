import './button.css';
import PropTypes from 'prop-types';

export default function Button({
  variant = 'primary',
  children = 'Text',
  ...rest
}) {
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
