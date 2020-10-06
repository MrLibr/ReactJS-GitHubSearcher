import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alert.context';


const Alert: React.FC = (): JSX.Element => {

  const { hide, alert } = useContext( AlertContext );

  if ( !alert.length ) {
    return ( <></> );
  }

  return (
    <div
      className={`alert alert-${ alert[ 0 ].type || 'secondary' } alert-dismissible`}
      role="alert"
    >
      {alert[ 0 ].text}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
