import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
      <div className='ProfileDiv'>
        <div>
          <div>
            <img 
              src={picture}
              alt="Profile"
              className="Profile-image"
            />
          </div>
          <div >
            <h1>{name}</h1>
            <p className="lead text-muted">{email}</p>
          </div>
        </div>
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
    </div>
  );
};

export default Profile;
