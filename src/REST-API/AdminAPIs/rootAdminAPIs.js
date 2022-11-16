export const rootAdminApi = {
    makeAdmin1OfInstitute: (info) => {
        return fetch("http://localhost:3030/makeAdmin1OfInstitute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    makeAdmin2OfInstitute: (info) => {
        return fetch("http://localhost:3030/makeAdmin2OfInstitute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    makeAdmin3OfInstitute: (info) => {
        return fetch("http://localhost:3030/makeAdmin3OfInstitute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    removeAdmin1OfInstitute: (info) => {
        return fetch("http://localhost:3030/removeAdmin1OfInstitute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    removeAdmin2OfInstitute: (info) => {
        return fetch("http://localhost:3030/removeAdmin2OfInstitute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    removeAdmin3OfInstitute: (info) => {
        return fetch("http://localhost:3030/removeAdmin3OfInstitute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    addDepartmentToInstitute: (info) => {
        return fetch("http://localhost:3030/addDepartmentToInstitute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    allUsersByInstitute: (info) => {
        return fetch("http://localhost:3030/allUsersByInstitute", {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });
    },

    


}