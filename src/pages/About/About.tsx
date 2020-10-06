import React from 'react';


const About: React.FC = (): JSX.Element => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">About:</h1>
        <p className="lead">This App Give Opportunity Search Some Reposetory On GitHub.</p>
        <p className="lead">App Version: <strong>1.0.0</strong></p>
      </div>
    </div>
  );
};

export default About;
