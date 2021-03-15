import { API } from "../config";

export const getProducts = sortBy => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=asc&limit=12`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
