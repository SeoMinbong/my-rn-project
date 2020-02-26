import React from 'react';
import logo from './logo.svg';
import './App.css';
//실질적인 화면에 출력하는 역할
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://naver.com"
          rel="hihihi"
        >
          네이버로 가기
        </a>
      </header>
    </div>
  );
}

export default App;
