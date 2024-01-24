export const BASE_URL = '//localhost:3000';

export const getHelloById = ({user_name}) => {
    return fetch(`${BASE_URL}/hello/${user_name}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })
};

export const getHello = () => {
    return fetch(`${BASE_URL}/hello`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })
};