const globalUrl = 'http://0c2c0a3927d3.ngrok.io/api'

export const createDangKykham = (tgdk,tgkham,noidungkham,loaikhamid,benhnhanid,bacsiid) => {
    const URL = `${globalUrl}/dangkykham/benhnhan/${benhnhanid}/bacsi/${bacsiid}`;
    return fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          thoigiandk: tgdk,
          thoigiankham: tgkham,
          noidungkham: noidungkham,
          loaikham: loaikhamid,
        })})
            .then((response) => response.json());
}