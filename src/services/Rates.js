import { get } from "./Services"

export function getSelic() {
    return get("https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json")
    .then((data) => { return data })
}

