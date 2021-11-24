import React from 'react';
import ReactDOM from 'react-dom';
import './Components/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Home from './Components/Home';
import PackageView from './Components/PackageView';
import EventView from './Components/EventView';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <div className="container">
      <PackageView />
      <EventView />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
