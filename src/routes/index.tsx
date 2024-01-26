/**
 * @author dutianhe@ruubypay.com
 * @date 2024-01-05 16:03:55
 * @description router 定义，默认懒加载
 * @module
 * @return
 */

import loadable from 'react-loadable'
import loading from '@/components/PageLoadingTip'
import { Router } from '@/interface/Router'

const router: Array<Router> = [
    {
        path: '/',
        component: loadable({
            loading,
            loader: () => import('@/pages/Home/Home')
        })
    }
]

export default router

