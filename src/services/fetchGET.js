// export const getUserInfo = (name) => {
//     let username = name.toLowerCase().trim();
//     const URL = `https://api.github.com/users/${username}`;
//     return fetchGET(URL)
//             .then((res) => res.json());
// }
import config from './config.js'

const {globalUrl} = config

async function fetchGET(URL) {
    let response = await fetch(URL)
    return response.json()
      .then(json =>{
        if(Array.isArray(json)){
            json[0]["status"] = response.status
            json[0]["statusText"] = response.statusText
        }else{
        json["status"] = response.status
        json["statusText"] = response.statusText
    }
        return json
      })
  }
export const getQuanHeByBenhNhanId = (benhnhanid) => {
    const URL = `${globalUrl}/quanhe/search?idchinh=${benhnhanid}`;
    console.log(URL)
    return fetchGET(URL)
}

export const getBenhNhanByBenhnhanId = (benhnhanid) =>{
    const URL = `${globalUrl}/benhnhan/details/${benhnhanid}`;
    return fetchGET(URL)
}

export const getAllTinh = () =>{
    const URL = `${globalUrl}/tinh/search`
    return fetchGET(URL)
}

export const getCosoyteByTinhId = (tinhid) =>{
    const URL = `${globalUrl}/cosoyte/search?tinhid=${tinhid}`
    return fetchGET(URL)
}

export const getKhoaByCosoyteId = (cosoyteid) =>{
    const URL = `${globalUrl}/khoa/search?cosoyteid=${cosoyteid}`
    return fetchGET(URL)
}

export const getBacSiByKhoaId = (khoaid) =>{
    const URL = `${globalUrl}/bacsi/search?khoaid=${khoaid}`
    return fetchGET(URL)
}

export const getAllHoso = (thoigiandkbegin,thoigiandkend,thoigiankhambegin,thoigiankhamend,trangthaikham,benhnhanid) =>{
    const URL = `${globalUrl}/dangkykham/search?thoigiandkbegin=${thoigiandkbegin}&thoigiandkend=${thoigiandkend}&thoigiankhambegin=${thoigiankhambegin}&thoigiankhamend=${thoigiankhamend}&trangthaikham=${trangthaikham}&benhnhanid=${benhnhanid}`
    return fetchGET(URL)
}