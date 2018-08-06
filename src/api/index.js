import { Base64 } from 'js-base64';

let host = window.location.href.split('/edi')[0];

export const dwz = ( qsStr ,fn) =>{
    let dwzHost = "http://ex666.cn/s?type=web";
    let con = Base64.encode(qsStr )
    let body = "url=" + host + "?con=" + con;
    // let isSelf = host + "?con=" + con;
    // console.log( isSelf.length )
    fetch( dwzHost , { 
        method:"post",
        mode: 'no-cors',
        credentials: 'include',
        Origin:"http://ex666.cn",
        // headers: { 'Content-Type': 'multipart/form-data' },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body,
    })
    .then( data => {
        console.log( data )
    })
}
