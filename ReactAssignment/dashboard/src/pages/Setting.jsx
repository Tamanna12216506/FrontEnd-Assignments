import { useAppContext } from '../Context';

const Setting = () => {
  const { theme, toggleTheme } = useAppContext();

  const panelClass =
    theme === 'dark'
      ? 'rounded-xl border border-slate-700 bg-slate-800 p-5'
      : 'rounded-xl border border-slate-200 bg-white p-5';

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Settings</h2>

      <div className={panelClass}>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-semibold">Theme</p>
            <p className="text-sm opacity-80">Current: {theme}</p>
          </div>
          <button
            onClick={toggleTheme}
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;