import { useEffect, useState } from 'react';
import { useAppContext } from '../Context';

const Dashboard = () => {
  const { userName, theme } = useAppContext();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setTotalUsers(users.length);
      })
      .catch(() => {
        setTotalUsers(0);
      });
  }, []);

  const cardClass =
    theme === 'dark'
      ? 'rounded-xl border border-slate-700 bg-slate-800 p-5'
      : 'rounded-xl border border-slate-200 bg-white p-5';

  return (
    <div>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p className="mt-1 mb-6 text-sm opacity-80">
        Hello {userName || 'User'}, this is your dashboard overview.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className={cardClass}>
          <p className="text-sm opacity-80">Current Time</p>
          <h3 className="mt-2 text-lg font-semibold">{currentTime.toLocaleTimeString()}</h3>
        </div>

        <div className={cardClass}>
          <p className="text-sm opacity-80">Total Users</p>
          <h3 className="mt-2 text-lg font-semibold">{totalUsers}</h3>
        </div>

        <div className={cardClass}>
          <p className="text-sm opacity-80">Quick Tip</p>
          <h3 className="mt-2 text-lg font-semibold">Use sidebar for routing</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;