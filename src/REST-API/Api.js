export const REST = {
    getInstitutes: () => {
        return fetch("http://localhost:3030/getInstitutes");
    },

    getDepartments: (institute) => {
        return fetch("http://localhost:3030/getDepartments", {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(institute)
        });
    },

    addInstitute: (institute) => {
        return fetch(`http://localhost:3030/addInstitute`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(institute)
        });
    },

    addUser: (user) => {
        return fetch(`http://localhost:3030/adduser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
    },
}