import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './components/Home/pages/home/wrapper';
import { Route, Switch, BrowserRouter} from 'react-router-dom'; 


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Wrapper}/>
  </BrowserRouter>,
  document.getElementById('root')
);


