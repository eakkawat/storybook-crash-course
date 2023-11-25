import './center.css';
import PropTypes from 'prop-types';

export default function Center({ children }) {
  return <div className='center'>{children}</div>;
}

Center.propTypes = {
  children: PropTypes.node,
};
