
export async function post(url, body) {

    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ body }),
    })
    .then((response) => { return response.json() })
    .then((json) => { return json })
    .catch((error) => console.error(error));
}

export async function get(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((json) => { return json })
    .catch((error) => console.error(error));
}

export async function postB3(url, body) {

    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body,
    })
    .then(response => { return response.json() })
    .then(json => { return json })
    .catch(e => { console.log(e) });
}