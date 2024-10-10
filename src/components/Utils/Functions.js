
export function transformFloatUni(value) {

    if(value.includes(","))
        value = parseFloat(value.replace(',', '.'));

    return value
}