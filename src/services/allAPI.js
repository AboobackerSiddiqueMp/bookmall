import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPIS"

export const registerAPIS= async(user)=>{

    return await commonAPI("post",`${BASE_URL}/user/register`,user,"")

}
export const loginAPI= async(reqBody)=>{

    return await commonAPI("post",`${BASE_URL}/user/login`,reqBody,"")

}
export const addbooksAPI= async(reqBody,reqHeader)=>{

    return await commonAPI("post",`${BASE_URL}/books/addbook`,reqBody,reqHeader)

}
export const getAllbooksAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/books/getAllbook`,"","")
}
export const getmangaAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/books/getmangabook`,"","")
}
export const getenglishAPI =async() =>{
    return await commonAPI("GET",`${BASE_URL}/books/getenglishbook`,"","")
}
export const getSearchAPI =async(bookSearch,reqHeader) =>{
    return await commonAPI("GET",`${BASE_URL}/books/getSearchbook?search=${bookSearch}`,"",reqHeader)
}
export const addBuyedbooksAPI= async(reqBody,reqHeader)=>{

    return await commonAPI("post",`${BASE_URL}/buy/addbuybook`,reqBody,reqHeader)

}
export const getbuydAPI =async(reqHeader) =>{
    return await commonAPI("GET",`${BASE_URL}/buy/getbuydbook`,"",reqHeader)
}



