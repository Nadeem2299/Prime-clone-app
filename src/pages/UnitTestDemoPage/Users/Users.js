import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        console.log('It is over!');
      });
  }, []);

  if (isLoading) {
    return <div className="spinner-border text-success" role="status"></div>;
  }

  if (isError) {
    return (
      <div className="alert alert-danger">Some Error Occurred. Try again later!</div>
    );
  }

  return (
    <div className="row">
      <h2>Users</h2>

      {userList.map((user) => {
        return (
          <div className="col-md-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">E-Mail: {user.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
