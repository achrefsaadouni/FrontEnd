import axios from "axios";


import {
    LOADING,
    GET_ACTIVITIES,
    GET_SUPERVISORS,
    GET_ACTIVITIES_MEMBERS_LIST,
    ADD_ACTIVITY,
    GET_ACTIVITY,
    GET_MEMBERS_ACTIVITY,
    ADD_MODULE,
    TODOS_MODULE, ADD_TODO

} from "./types";
import {setForumLoading} from "./forumActions";

export const getActivities = () => dispatch => {
    dispatch(setForumLoading());
    axios
        .get(
            `http://localhost:2500/api/activity/getAllCreatedActivities`
        )
        .then(res => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: res.data
            })

                console.log(res)
        })
        .catch(err =>
            dispatch({
                type: GET_ACTIVITIES,
                payload: {}
            })
        );
};
export const getActivityById = (id) => dispatch => {
    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/getActivityById`,{activityId:id}
        )
        .then(res => {
            dispatch({
                type: GET_ACTIVITY,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: GET_ACTIVITY,
                payload: {}
            })
        );
};
export const getActivityMembers = (id) => dispatch => {
    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/getActMembers`,{activityId:id}
        )
        .then(res => {
            dispatch({
                type: GET_MEMBERS_ACTIVITY,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_MEMBERS_ACTIVITY,
                payload: {}
            })
        );
};
export const getSupervisors = () => dispatch => {
    dispatch(setForumLoading());
    axios
        .get(
            `http://localhost:2500/api/activity/getAllSupervisors`
        )
        .then(res => {
            dispatch({
                type: GET_SUPERVISORS,
                payload: res.data
            });

            console.log(res)
        })
        .catch(err =>
            dispatch({
                type: GET_SUPERVISORS,
                payload: {}
            })
        );
};


export const getMembersList = tab => dispatch => {

    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/getAllMembers`,{members: tab}
        )
        .then(res => {
            dispatch({
                type: GET_ACTIVITIES_MEMBERS_LIST,
                payload: res.data
            })

            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: GET_ACTIVITIES_MEMBERS_LIST,
                payload: {}
            })
        );
};

export const CreateActivity = values => dispatch => {

    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/createActivity`,{values: values}
        )
        .then(res => {
            dispatch({
                type: ADD_ACTIVITY,
                payload: res.data
            })

            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: ADD_ACTIVITY,
                payload: {}
            })
        );
};
export const getTodosForModule = values => dispatch => {

    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/getTodoByModule`,{moduleId: values}
        )
        .then(res => {
            dispatch({
                type: TODOS_MODULE,
                payload: res.data
            })

            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: TODOS_MODULE,
                payload: {}
            })
        );
};
export const CreateModule = (x,y,z,w) => dispatch => {

    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/createModule`,{activityId: x,title:y,responsible:z,description:w}
        )
        .then(res => {
            dispatch({
                type: ADD_MODULE,
                payload: res.data
            })

            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: ADD_MODULE,
                payload: {}
            })
        );
};

export const CreateTodo = (x,y,z,w,m) => dispatch => {

    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/addTodo`
            ,{title: x,description:y,tags:z,label:w,moduleId:m}
        )
        .then(res => {
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })

            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: ADD_TODO,
                payload: {}
            })
        );
};