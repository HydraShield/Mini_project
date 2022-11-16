export const SellerREST = {
    addSeller: (seller) => {
        return fetch(`http://localhost:3030/seller/addseller`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(seller)
        });
    },

    addProduct: (product) => {
        return fetch(`http://localhost:3030/seller/addproduct`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
    },

    editProduct: (product, id) => {
        return fetch(`http://localhost:3030/seller/editproduct/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
    },

    deleteProduct: (id) => {
        return fetch(`http://localhost:3030/seller/deleteproduct/${id}`,{
            method: "DELETE",
        });
    },

    getAllProduct: () => {
        return fetch(`http://localhost:3030/seller/getproductsBySeller`)
    },


    editAcceptRequest: (id) => {
        return fetch(`http://localhost:3030/seller/acceptrequest/${id}`,{
            method: "PUT",
        });
    },

    editRejectRequest: (id) => {
        return fetch(`http://localhost:3030/seller/rejectrequest/${id}`,{
            method: "PUT",
        });
    },

    getRequests: () => {
        return fetch(`http://localhost:3030/seller/getrequests`);
    }
}
