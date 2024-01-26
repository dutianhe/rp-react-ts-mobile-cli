/** axios **/
export interface ApiBaseType {
    url: string,
    data: any
}

export interface BaseResponseData {
    resCode:string,
    resMessage:string,
    subCode?:string,
    subMessage?:string,
}


/** api list **/
export interface StringKeyedObject {
    [key: string]: string;
}


/**
 * @author dutianhe@ruubypay.com
 * @date 2024-01-26 11:30:19
 * @description 初始化网络请求state默认值
 * @module
 * @return
 */
export interface BaseReqInitStateType {
    loadingStatus:'init' | 'pending' | 'fulfilled' | 'rejected',
    data:object
}
