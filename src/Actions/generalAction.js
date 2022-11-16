import { REST } from "../REST-API/Api"

export const getInstitutes = () => async (dispatch) => {
    try {
        const res = await REST.getInstitutes();
        const data = await res.json();
        dispatch({ type: "getInst", payload: data.institutes })
    } catch (error) {
        console.error(error);
    }
}

export const getIDepartments = (institute) => async (dispatch) => {
    try {
        const res = await REST.getDepartments(institute);
        const data = await res.json();
        dispatch({ type: "getDept", payload: data.departments })
    } catch (error) {
        console.error(error);
    }
}

export const addInstitute = (institute) => async (dispatch) => {
    try {
        const res = await REST.addInstitute(institute);
        const data = await res.json().message;
        alert(data);
        dispatch({ type: "addInst", payload: institute })
    } catch (error) {
        console.error(error);
    }
}

export const addUser = (user) => async (dispatch) => {
    try {
        const res = await REST.addInstitute(user);
        const data = await res.json().message;
        alert(data);
        dispatch({ type: "addUser", payload: user })
    } catch (error) {
        console.error(error);
    }
}