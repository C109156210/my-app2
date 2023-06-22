import React from 'react';
import './Aboutpage.css';
import profileImage from './self.jpg';
import { FaBirthdayCake } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div>
      <div className="card">
        <div className="about-content">
          <h1 className="title">陳虹妤</h1>
          <img className="profile-image" src={profileImage} alt="Profile" />
          <div className="text-content">
            <p className="birthday"><FaBirthdayCake /> 2002/03/02</p>
            <p>你好呀！我是正就讀於高科大智慧商務系大三學生，今年即將邁入大四生活。</p>
            <p>我正專研於金融科技、網頁設計相關的知識，於高中時也有接觸過資電類的相關知識。</p>
          </div>
        </div>
      </div>
      <div className="card1-container">
        <div className="card1">
          <h2>興趣</h2>
          <ul>
            <li>研究貓狗行為</li>
            <li>排球</li>
          </ul>
        </div>
        <div className="card1">
          <h2>專長</h2>
          <ul>
            <li>Figma設計</li>
            <li>PS和AI基礎使用</li>
            <li>python撰寫</li>
            <li>React撰寫</li>
          </ul>
        </div>
        <div className="card1">
          <h2>經驗</h2>
          <ul>
            <li>電腦硬體裝修丙級</li>
            <li>電腦硬體裝修乙級</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
