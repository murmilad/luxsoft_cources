

import logo from '../logo.svg';
import './App.css';
import React from 'react';

import GridComponent from '../Components/grid';
import Users from '../Components/user-details';
import {SummaryActive, SummaryUsers} from '../Components/summaries';
import {Switch, Route, Link} from "react-router-dom";

function App() {
  return ( 
	<>
		<div>
			<h1>Our awesome app</h1>
			<ul role="nav">
				<li><Link to="/grid">Grid</Link></li>
				<li><Link to="/details">Details</Link></li>
			</ul>
		</div>
		<Switch>
			<Route path="/grid" component={GridComponent}/>
			<Route exact path="/details" component={Users}/>
			<Route path="/details/:id" component={Users}/>
		</Switch>
	</>)
}

export default App;
