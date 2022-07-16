import { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('online')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response
          .json()
          .then((users) => {
            setData(users)
            localStorage.setItem('users', JSON.stringify(users))
          })
      })
      .catch((fetchErr) => {
        setMode('offline')
        let collection = localStorage.getItem('users')
        setData(JSON.parse(collection))
      });
  }, []);

  return (
    <div className="container">
      <p>{mode}</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={`${user?.id}-${user?.username}`}>
              <th scope="row">{user?.id}</th>
              <th scope="row">{user?.name}</th>
              <th scope="row">{user?.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
