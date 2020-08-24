// export const getUserInfo = (name) => {
//     let username = name.toLowerCase().trim();
//     const URL = `https://api.github.com/users/${username}`;
//     return fetch(URL)
//             .then((res) => res.json());
// }
const globalUrl = 'http://6098c638b1ff.ngrok.io/api'

export const getQuanHeByTaikhoanId = (taikhoanid) => {
    const URL = `${globalUrl}/quanhe/benhnhan/${taikhoanid}`;
    return fetch(URL)
            .then((response) => response.json());
}

export const getBenhNhanByBenhnhanId = (benhnhanid) =>{
    const URL = `${globalUrl}/benhnhan/${benhnhanid}`;
    return fetch(URL)
            .then((response) => response.json());
}

export const getAllTinh = () =>{
    const URL = `${globalUrl}/tinh`
    return fetch(URL)
            .then((response) => response.json());
}

export const getCosoyteByTinhId = (tinhid) =>{
    const URL = `${globalUrl}/cosoyte/tinh/${tinhid}`
    return fetch(URL)
            .then((response) => response.json());
}

export const getKhoaByCosoyteId = (cosoyteid) =>{
    const URL = `${globalUrl}/khoa/cosoyte/${cosoyteid}`
    return fetch(URL)
            .then((response) => response.json());
}

export const getBacSiByKhoaId = (khoaid) =>{
    const URL = `${globalUrl}/bacsi/khoa/${khoaid}`
    return fetch(URL)
            .then((response) => response.json());
}

export const getTinhById = (id) =>{
    const URL = `${globalUrl}/tinh/${id}`
    return fetch(URL)
            .then((response) => response.json());
}

export const getCosoyteById = (id) =>{
    const URL = `${globalUrl}/cosoyte/${id}`
    return fetch(URL)
            .then((response) => response.json());
}

export const getKhoaById = (id) =>{
    const URL = `${globalUrl}/khoa/${id}`
    return fetch(URL)
            .then((response) => response.json());
}

export const getBacSiById = (id) =>{
    const URL = `${globalUrl}/bacsi/${id}`
    return fetch(URL)
            .then((response) => response.json());
}
