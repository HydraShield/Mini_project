
import { SellerREST } from "../REST-API/SellerApi";

export const addSeller = (seller) => async (dispatch) => {
    try {
        const res = await SellerREST.addSeller(seller);
        const data = await res.json();
        alert(data.message)
        dispatch({ type: "addSeller", payload: seller })
    } catch (error) {
        console.error(error);
    }
}

export const addProduct = (product) => async (dispatch) => {
    try {
        const res = await SellerREST.addSeller(product);
        const data = await res.json().message;
        alert(data)
        dispatch({ type: "addProduct", payload: product })
    } catch (error) {
        console.error(error);
    }
}

export const editProduct = (product) => async (dispatch) => {
    try {
        const res = await SellerREST.editProduct(product.id);
        const data = await res.json().message;
        alert(data)
        if (res.status === 200) {
            dispatch({ type: "editProduct", payload: product })
        }
    } catch (error) {
        console.error(error);
    }
}

export const deleteProduct = (product) => async (dispatch) => {
    try {
        const res = await SellerREST.deleteProduct(product.id);
        const data = await res.json().message;
        alert(data)
        if (res.status === 200) {
            dispatch({ type: "deleteProduct", payload: product })
        }
    } catch (error) {
        console.error(error);
    }
}

export const getAllProduct = () => async (dispatch) => {
    try {
        const res = await SellerREST.getAllProduct();
        const data = await res.json();
        if (res.status === 200) {
            dispatch({ type: "getAllProduct", payload: data.products })
        }
    } catch (error) {
        console.error(error);
    }
}

export const getRequests = () => async (dispatch) => {
    try {
        const res = await SellerREST.getRequests();
        const data = await res.json();
        dispatch({ type: "getRequests", payload: data.requests });
    } catch (error) {
        console.error(error);
    }
}

export const acceptRequests = (request) => async (dispatch) => {
    try {
        const res = await SellerREST.acceptRequests(request.id);
        const data = await res.json().message;
        alert(data)
        dispatch({ type: "accept", payload: request });
    } catch (error) {
        console.error(error);
    }
}

export const rejectRequests = (request) => async (dispatch) => {
    try {
        const res = await SellerREST.rejectRequests(request.id);
        const data = await res.json().message;
        alert(data)
        dispatch({ type: "reject", payload: request });
    } catch (error) {
        console.error(error);
    }
}