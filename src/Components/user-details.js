import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import UserDetail from './user-detail';
import { useSelector, useDispatch } from 'react-redux'
import { loadDataInUsers } from '../Actions'



function UserDetails(props){
	const dispatch = useDispatch();

	let loadData = () => {
		dispatch(loadDataInUsers());
	}

	useEffect(()=> {

		loadData();

	}, []);

	return (<>
		{props.loading && (<div style={{width:300, height: 300, padding: 20}}>Loading...</div>)}
		{props.details && props.details.map((user, id) => <UserDetail key={id}record={user}/>)}
		</>
	)
}

function mapStateToProps(state, ownProps) {
	const { id } = ownProps
		
	return {
		details: state.details,
		loading: state.loading
	}
}

export default connect(
	mapStateToProps
)(UserDetails)

