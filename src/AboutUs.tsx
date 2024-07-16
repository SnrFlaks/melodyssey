import { useNavigate } from "react-router-dom";


const AboutUs = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="about-us">
      <div className="title-container" onClick={handleLogoClick}>
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className="title">Melodyssey</h1>
      </div>
      <h1>Про нас</h1>
      <p className="content">
        Melodyssey - це музичний стрімінговий сервіс, що дозволяє насолоджуватися музикою
        використовуючи вбудовані елементи Spotify. Тут ви можете ознайомитися з командою
        розробників проекту:
      </p>
      <ul>
        <li>
          <div className="profile">
            <div className="info">
              <h2>L1kkkk (Максим Руденко)</h2>
              <p className="description">Створення сторінки "Про нас".</p>
            </div>
            <a href="https://github.com/L1kkkk" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="github-icon" />
            </a>
          </div>
        </li>
        <li>
          <div className="profile">
            <div className="info">
              <h2>SnrFlaks (Володимир Волошин)</h2>
              <p className="description">Створення головної сторінки.</p>
            </div>
            <a
              href="https://github.com/SnrFlaks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.svg" alt="GitHub" className="github-icon" />
            </a>
          </div>
        </li>
        <li>
          <div className="profile">
            <div className="info">
              <h2>RossYatsiuk (Ростислав Яцюк)</h2>
              <p className="description">Написання стилів.</p>
            </div>
            <a
              href="https://github.com/RossYatsiuk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.svg" alt="GitHub" className="github-icon" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
