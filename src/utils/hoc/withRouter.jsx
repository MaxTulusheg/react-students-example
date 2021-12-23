import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <Component
        {...props}
        params={params}
        navigate={navigate}
        location={location}
      />
    );
  };

  Wrapper.displayName = `withRouter(${Component.displayName || Component.name || 'Component'})`;

  return Wrapper;
};

export default withRouter;
