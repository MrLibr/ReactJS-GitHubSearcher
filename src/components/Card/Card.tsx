import React from 'react';
import { Link } from 'react-router-dom';


export interface ICard {
  user: any;
}

const Card: React.FC<ICard> = ( { user } ): JSX.Element => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <Link to={`/profile/${ user.login }`} className="btn btn-primary">Open</Link>
      </div>
    </div>
  );
};

export default Card;
