import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alert.context';
import { GithubContext } from '../../context/github/githubContext';


const Search: React.FC = (): JSX.Element => {

  const alert = useContext( AlertContext );
  const github = useContext( GithubContext );
  const [ value, setValue ] = useState<string>( '' );

  const handlerSubmit = ( event: React.KeyboardEvent ): void => {
    if ( event.key !== 'Enter' ) {
      return;
    };

    if ( value.trim() ) {
      alert.hide();
      github.search( value );
    } else {
      github.clearUsers();
      alert.show( 'Write Infomation About User' );
    }
  };

  const handlerChange = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
    setValue( event.target.value );
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Write User NickName..."
        value={value}
        onChange={handlerChange}
        onKeyPress={handlerSubmit}
      />
    </div>
  );
};

export default Search;
