import React from 'react';
import './Homepage.css';
import './App.css';
import dog from './assets/dog.jpg';

const HomePage = () => {
  return (
    <div className="homepage-container" style={{ backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', backgroundColor: 'white', backgroundImage: `URL(${dog})`, height: '100vh', width: '100vw' }}>
   

        <h1>歡迎來到我的部落格！</h1>
        <b>「這裡是一個關於我自己和我獨特生活的分享空間。我相信每個人都有故事，而這個部落格正是我展示自己的地方。」</b>
      </div>

  );
};

export default HomePage;

