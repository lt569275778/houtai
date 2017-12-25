import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router =  new Router({
	mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/thirdpartyCall',
            component: resolve => require(['../components/page/ThirdpartyCall/TCIndex.vue'], resolve)    //第三方调用入口
        },
        {
            path: '/fundDetail',
            name: 'fundDetail',
            component: resolve => require(['../components/page/ThirdpartyCall/TCDetail.vue'], resolve)    //查看公积金详的详情页
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },{
                    path: '/operatorIndex',
                    component: resolve => require(['../components/page/orgindata/operator/index.vue'], resolve)    // 测试服务
                },{
                    path: '/operatorDetail',
                    name: 'operatorDetail',
                    component: resolve => require(['../components/page/orgindata/operator/detail.vue'], resolve)    // 测试服务
                },{
                    path: '/jdIndex',
                    component: resolve => require(['../components/page/orgindata/jd/jdList.vue'], resolve)          //京东原始数据列表
                },{
                    path: '/jdDetail',
                    name: 'jdDetail',
                    component: resolve => require(['../components/page/orgindata/jd/jdDetail.vue'], resolve)    //京东详情页
                },{
                    path: '/chisIndex',
                    component: resolve => require(['../components/page/orgindata/chis/index.vue'], resolve),    // 学信列表
                },{
                    path: '/chisDetail',
                    name: 'chisDetail',
                    component: resolve => require(['../components/page/orgindata/chis/detail.vue'], resolve)    // 测试服务
                },{
                	path:'/cbankIndex',
                	component: resolve => require(['../components/page/orgindata/cbank/index.vue'], resolve)
                },{
                	path:'/cbankDetail',
                	name: 'cbankDetail',
                    component: resolve => require(['../components/page/orgindata/cbank/detail.vue'], resolve)
                },{
                    path:'/fsFundIndex',
                    name:'fsFundIndex',
                    component:resolve => require(['../components/page/orgindata/fsfund/index.vue'],resolve)
                },{
                    path:'/fsFundDetail',
                    name:'fsFundDetail',
                    component:resolve => require(['../components/page/orgindata/fsfund/detail.vue'],resolve)
                },{
                    path: 'productIndex',
                    component: resolve => require(['../components/page/DataMaintain/product/index.vue'], resolve)    //产品维护
                }, {
                    path:'/systemManagement',
                    name:'systemManagement',
                    component:resolve=>require(['../components/page/systemManagement/index.vue'],resolve)
                },{
                    path:'/user',
                    name:'user',
                    component:resolve=>require(['../components/page/systemManagement/user.vue'],resolve)
                },
                {
                    path:'/gzgl',
                    name:'gzgl',
                    component:resolve=>require(['../components/page/systemManagement/gzgl.vue'],resolve)
                }, {
                    path:'/menu',
                    name:'menu',
                    component:resolve=>require(['../components/page/systemManagement/menu.vue'],resolve)
                },
                {
                    path:'/role',
                    name:'role',
                    component:resolve=>require(['../components/page/systemManagement/role.vue'],resolve)
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/login/Login.vue'], resolve)
        },
        {
            path: 'dataVindicate',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/channelsIndex',
                    component: resolve => require(['../components/page/DataMaintain/channels/index.vue'], resolve)    // 渠道维户首页
                },
                {
                    path: '/productIndex',
                    component: resolve => require(['../components/page/DataMaintain/product/index.vue'], resolve)      //产品信息维护首页
                },
                {
                    path: '/channelProductMappingIndex',
                    component: resolve => require(['../components/page/DataMaintain/channelProductMapping/index.vue'], resolve)      //产品信息维护首页
                }
            ]
        },
        {
            path: 'qzsz',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/qzsz',
                    component: resolve => require(['../components/robot/group/index.vue'], resolve)    // 测试服务
                }
            ]
        },
       
    ],
});
router.beforeResolve((to,from,next) => {
    if(to.path == "/login" || to.path == '/thirdpartyCall' || to.path == '/fundDetail'){
        next();
    }else {
        let userInfo = sessionStorage.getItem("userInfo");
        if(userInfo == null||typeof (userInfo) == undefined) {
            router.push('/login')
        }else {
            next();
        }
    }
})
export default router;
