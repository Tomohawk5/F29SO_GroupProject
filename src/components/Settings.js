import '../css/Settings.css';

const Settings = () => {
  return <div className="Header__item dropdown">
    Settings
    <li className="dropdown-content">
      <div>
        Theme
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
      </div>
      <div>Account</div>
      <div>Cookies</div>
    </li>
  </div>;
};

export default Settings;
