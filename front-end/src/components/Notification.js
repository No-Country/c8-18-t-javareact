import React from 'react';

import PropTypes from 'prop-types/';

const Notification = ({ message }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 text-xs" role="alert">
      <p className="font-bold">Hubo un erorr</p>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;

