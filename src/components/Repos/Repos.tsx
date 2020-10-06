import React from 'react';


export interface IRepos {
  repos: any[];
}

const Repos: React.FC<IRepos> = ( { repos } ): JSX.Element => {
  return (
    <>
      {repos.map( reposetory => {
        return (
          <div className="card mb-3" key={reposetory.id}>
            <div className="card-body">
              <h5>
                <a
                  href={reposetory.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >{reposetory.name}</a>
              </h5>
            </div>
          </div>
        );
      } )}
    </>
  );
};

export default Repos;
