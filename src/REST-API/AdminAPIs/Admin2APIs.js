export const Admin2Api = {
    addItems: (item) => {
        return fetch("http://localhost:3030/addItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
    },

    updateItem: (item, id) => {
        return fetch(`http://localhost:3030/updateItems/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
    },

    deleteItem: (item, id) => {
        return fetch(`http://localhost:3030/deleteItems/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
    },

    getItem: (dept) => {
        return fetch(`http://localhost:3030/getItems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dept)
        });
    },

    getItem1: (id) => {
        return fetch(`http://localhost:3030/getItems/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
        });
    },

    requestItems: (quantity, id) => {
        return fetch(`http://localhost:3030/requestItems/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quantity)
        });
    },

    approveRequest: (quantity, id) => {
        return fetch(`http://localhost:3030/approveRequest/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
        });
    },

    getAllRequests: (quantity, id) => {
        return fetch(`http://localhost:3030/agetAllRequests`, {
        });
    },
}