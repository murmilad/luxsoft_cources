import * as types from '../Constants'

export function filterGrid(value) {
    return {
        type:'FILTER',
        value:value
    }
}
export function toggleActive(index) {
    return {
        type:'TOGGLE_ACTIVE',
        value:index
    }
}

export function firstNameEdit(index,value){
    return {
        type:'FIRST_NAME_EDIT',
        value:{index,value}
    }
}

export function startLoading() {
    return {
        type: types.START_LOADING
    }
}

export function stopLoading() {
    return {
        type: types.STOP_LOADING
    }
}

export function addData(value) {
    return {
        type: types.ADD_DATA,
        value
    }
}
export function addUser(value) {
    return {
        type: types.ADD_USER,
        value
    }
}

export function loadDataInUsers(){
    return (dispatch)=>{
        dispatch(startLoading());
        fetch('http://localhost:4730')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                dispatch(addUser(json.detailsRecords))
            }).then(function(){
                dispatch(stopLoading());
        })
    }
}
export function loadDataInGrid(){
    return (dispatch)=>{
        dispatch(startLoading());
        fetch('http://localhost:4730')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                dispatch(addData(json.gridRecords))
            }).then(function(){
                dispatch(stopLoading());
        })
    }
}