
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {filterGrid, toggleActive as toggleActiveAction, firstNameEdit as firstNameEditAction, loadDataInGrid } from '../Actions'

function GridRecord({record, history, toggleActive, firstNameEdit})  {
	const showUserDetails = (e) => {
		e.preventDefault();
		history.push(`/details/${record.id}`);
	}
	
	return 	<tr>
				<th onClick={showUserDetails}><a href="#">{record.id}</a></th>
				<th><input type="text" value={record.firstName} onChange={firstNameEdit}/></th>
				<th>{record.lastName}</th>
				<th><input type="checkbox" checked={record.active} onChange={toggleActive}/></th>
	</tr>
	
}
export default function GridComponent(props) {
	const dispatch = useDispatch();
	
	let loadData = () => {
		dispatch(loadDataInGrid());
	}

	const filterInput = useRef(null);

	useEffect(()=> {

		filterInput.current.focus();
		loadData();

	}, []);


	let toggleActive = (index) => {
		dispatch(toggleActiveAction(index));
	}

	let firstNameEdit = (index, value) => {
		dispatch(firstNameEditAction(index,value));
	}

	let handleFilterChange = (value) => {
		dispatch(filterGrid(value));
	}

	const records = useSelector(state => state.grid.records);
	const filter = useSelector(state => state.grid.filter);
	const loading = useSelector(state => state.grid.loading);

	let gridRecords = records.filter((record) =>
		record.firstName.toUpperCase().includes(filter.toUpperCase())).map( (record,index) =>{
			return <GridRecord record={record} history={props.history} key={index} toggleActive={toggleActive.bind(null, index)} firstNameEdit={e => firstNameEdit(index, e.target.value)}/>
		});


	return (
		<div style={{width:300, height: 300, padding: 20}}>
		{loading && (<div style={{width:300, height: 300, padding: 20}}>Loading...</div>)}
			<p>
				<input  type="text" ref={filterInput} placeholder="Filter by..." onChange={e => handleFilterChange(e.target.value)}/>
			</p>
			<table className="table table-condensed">
				<thead>
					<tr>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Active</th>
					</tr>
				</thead>
				<tbody>
					{gridRecords}
				</tbody>
				</table>
			</div>
		)
}


