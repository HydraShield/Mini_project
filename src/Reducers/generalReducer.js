export const Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case "getInst":
            return { ...state, institutes: payload };
        case "getDept":
            return { ...state, departmemts: payload };
        case "addInst":
            return { ...state, institutes: [...this.institutes, payload] };
        case "addUser":
            return { ...state, users: [...this.users, payload] };
        case "accept":
            return { ...state, accept: [...this.accept, payload] };
        case "reject":
            return { ...state, reject: [...this.reject, payload] };
        case "getRequests":
            return { ...state, requests: payload };
        case "addSeller":
            console.log(payload)
            return { ...state, sellers: [...this.sellers, payload] };
        case "addProduct":
            return { ...state, products: [...this.products, payload] };
        case "editProduct":
            return { ...state, products: this.products.map((pro) => (pro.id === payload.id ? payload : pro)) };
        case "deleteProduct":
            return { ...state, products: this.products.filter((pro) => pro.id === payload.id) };
        case "getAllProduct":
            return { ...state, products: payload }
        default:
            return state;
    }
}