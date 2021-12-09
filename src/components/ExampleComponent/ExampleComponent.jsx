import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ExampleComponent = (props) => {
  const { name } = props;

  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('componentDidMount');
  }, []);
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  return (
    <div>
      <h3>
        My name is
        {' '}
        {name}
      </h3>

      <h4>Message:</h4>
      <textarea value={message} onChange={(event) => setMessage(event.target.value)} />

      <h4>Preview</h4>
      <p>{message}</p>
    </div>
  );
};

ExampleComponent.propTypes = {
  name: PropTypes.string,
};

ExampleComponent.defaultProps = {
  name: 'Jhon Doe',
};

export default ExampleComponent;
