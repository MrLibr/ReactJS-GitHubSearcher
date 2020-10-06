import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../../components/Repos/Repos';
import { GithubContext } from '../../context/github/githubContext';


export interface IProfile {
  match: any;
}

const Profile: React.FC<IProfile> = ( { match } ): JSX.Element => {

  const { getUser, getRepos, loading, user, repos } = useContext( GithubContext );
  const urlName = match.params.name;

  useEffect( () => {
    getUser( urlName );
    getRepos( urlName );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ urlName ] );

  if ( loading ) {
    return <p className="text-center">Loading...</p>;
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos, public_gists
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">Home Page</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                width="150"
                height="150"
              />
              <h3>{name}</h3>
              {location && <p><strong>Location:</strong> {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3><strong>Biography:</strong></h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >Open Profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>

              <div className="badge badge-primary"><strong>Followers:</strong> {followers}</div>
              <div className="badge badge-success"><strong>Following:</strong> {following}</div>
              <div className="badge badge-info"><strong>Repositories:</strong> {public_repos}</div>
              <div className="badge badge-dark"><strong>Gists:</strong> {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default Profile;
