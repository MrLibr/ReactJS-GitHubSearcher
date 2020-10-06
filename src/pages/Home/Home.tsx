import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import { GithubContext } from '../../context/github/githubContext';

const Home: React.FC = (): JSX.Element => {

  const { users, loading } = useContext( GithubContext );

  return (
    <>
      <Search />
      <div className="row">
        {
          loading
            ? <p className="text-center">Loading...</p>
            : (
              users.map( ( user: any ) => {
                return (
                  <div className="col-sm-4 mb-4" key={user.login}>
                    <Card user={user} />
                  </div>
                );
              } )
            )
        }
      </div>
    </>
  );
};

export default Home;
