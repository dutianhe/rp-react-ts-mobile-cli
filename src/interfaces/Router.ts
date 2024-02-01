
/** 路由 **/
export interface Router {
    name?: string,
    path: string,
    children?: Array<Router>,
    component: any
}
