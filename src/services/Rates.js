import { get } from "./Services"

const day = new Date().getDay();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const date = day + "/" + month + "/" + year;

const token = "mCtkpfj1m6JdZeZcg1Czzo"

export function getSelic() {
    return get("https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json")
    .then((data) => { return data })
}

export function getSelic2() {
    return get("https://brapi.dev/api/v2/prime-rate?country=brazil&start=" + date 
        + "&end=" + date + "&sortBy=date&sortOrder=desc&token=" + token)
    .then((data) => { return data })
}
