import { BrowserRouter, Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Users from './pages/Users';
import { useAppContext } from './Context';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAppContext();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function Layout() {
  const { logout, theme, userName } = useAppContext();

  const mainClasses =
    theme === 'dark'
      ? 'min-h-screen bg-slate-900 text-slate-100'
      : 'min-h-screen bg-slate-100 text-slate-800';

  const sidebarClasses =
    theme === 'dark'
      ? 'w-64 bg-slate-800 border-r border-slate-700 p-4'
      : 'w-64 bg-white border-r border-slate-200 p-4';

  const contentClasses = theme === 'dark' ? 'flex-1 p-6' : 'flex-1 p-6';

  const getLinkClass = ({ isActive }) => {
    const base = 'block rounded-lg px-3 py-2 text-sm font-medium';
    if (isActive) {
      return theme === 'dark'
        ? `${base} bg-sky-600 text-white`
        : `${base} bg-sky-500 text-white`;
    }
    return theme === 'dark'
      ? `${base} text-slate-200 hover:bg-slate-700`
      : `${base} text-slate-700 hover:bg-slate-100`;
  };

  return (
    <div className={mainClasses}>
      <div className="mx-auto flex min-h-screen max-w-7xl">
        <aside className={sidebarClasses}>
          <h1 className="mb-1 text-xl font-bold">Simple Dashboard</h1>
          <p className="mb-6 text-sm opacity-80">Welcome {userName || 'User'}</p>

          <nav className="space-y-2">
            <NavLink to="/" className={getLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/users" className={getLinkClass}>
              Users
            </NavLink>
            <NavLink to="/settings" className={getLinkClass}>
              Settings
            </NavLink>
          </nav>

          <button
            onClick={logout}
            className="mt-8 w-full rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-600"
          >
            Logout
          </button>
        </aside>

        <main className={contentClasses}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Setting />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;