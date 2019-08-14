import Init from '../layouts/Init'

import BasicLayout from '../layouts/BasicLayout'

// import Login from '../layout/Login'

import IndexLayout from '../layouts/IndexLayout'

import PodList from '../pages/pod/list'

const routes = [
    {
        path: "/",
        exact: true,
        component: Init,
    },
    {
        path: "/dashboard",
        component: BasicLayout,
        routes: [
            {
                path: "/dashboard/pods",
                component: IndexLayout,
                routes: [
                    {
                        path: "/dashboard/pods",
                        exact: true,
                        component: PodList,
                    },
                ]
            }
        ]
    }
];

export default routes;