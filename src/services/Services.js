
export function post(url, body) {
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ body }),
    })
    .then((response) => { return response.json() })
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
}

export async function get(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((json) => { return json })
    .catch((error) => console.error(error));
}