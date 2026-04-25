import { useEffect, useState } from 'react'
import axios from 'axios';
import { useAppContext } from '../Context';

const Users = () => {
  const { theme } = useAppContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Unable to load users');
        setLoading(false);
        console.log(err);
      });
  }, []);

  const cardClass =
    theme === 'dark'
      ? 'rounded-lg border border-slate-700 bg-slate-800 p-4 shadow'
      : 'rounded-lg border border-slate-200 bg-white p-4 shadow';

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p className="text-rose-500">{error}</p>;
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Users</h1>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className={cardClass}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Username:</strong> {item.username}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Address:</strong> {item.address.street}, {item.address.city}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Website:</strong> {item.website}</p>
            <p><strong>Company:</strong> {item.company.name}</p>
          </div>
        ))}
        </div>
      </div>
  );
};

export default Users;