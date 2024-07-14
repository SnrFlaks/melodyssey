import { Icon, IconButton } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <div className="title-container">
          <img src="/logo.png" alt="logo" className="logo" />
          <h1 className="title">Melodyssey</h1>
        </div>
        <IconButton className="info-btn" aria-label="Open about us">
          <Icon className="info-icon">info</Icon>
        </IconButton>
      </div>
    </div>
  );
}

export default App;
