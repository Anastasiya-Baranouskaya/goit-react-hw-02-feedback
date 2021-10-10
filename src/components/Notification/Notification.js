import PropTypes from 'prop-types';
import s from './Notification.module.css';

export function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.defaultProps = {
  message: 'No feedback given',
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};
