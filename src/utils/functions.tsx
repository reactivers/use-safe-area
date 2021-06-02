export const isEqualJSON = (json1 = {}, json2 = {}) => {
    return JSON.stringify(json1) === JSON.stringify(json2);
}