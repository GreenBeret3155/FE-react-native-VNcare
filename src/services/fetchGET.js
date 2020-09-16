// export const getUserInfo = (name) => {
//     let username = name.toLowerCase().trim();
//     const URL = `https://api.github.com/users/${username}`;
//     return fetch(URL)
//             .then((res) => res.json());
// }
import config from './config.js'

const {globalUrl} = config
export const getQuanHeByBenhNhanId = (benhnhanid) => {
    const URL = `${globalUrl}/quanhe/search?idchinh=${benhnhanid}`;
    console.log(URL)
    return fetch(URL)
}

export const getBenhNhanByBenhnhanId = (benhnhanid) =>{
    const URL = `${globalUrl}/benhnhan/details/${benhnhanid}`;
    return fetch(URL)
}

export const getAllTinh = () =>{
    const URL = `${globalUrl}/tinh/search`
    return fetch(URL)
}

export const getCosoyteByTinhId = (tinhid) =>{
    const URL = `${globalUrl}/cosoyte/search?tinhid=${tinhid}`
    return fetch(URL)
}

export const getKhoaByCosoyteId = (cosoyteid) =>{
    const URL = `${globalUrl}/khoa/search?cosoyteid=${cosoyteid}`
    return fetch(URL)
}

export const getBacSiByKhoaId = (khoaid) =>{
    const URL = `${globalUrl}/bacsi/search?khoaid=${khoaid}`
    return fetch(URL)
}