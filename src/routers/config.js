import Init from '../layouts/Init'

import BasicLayout from '../layouts/BasicLayout'

// import Login from '../layouts/Login'

// import IndexLayout from '../layouts/IndexLayout'

// import PodList from '../pages/pod/list'

const routes = [
    {
        path: "/",
        exact: true,
        component: Init,
    },
    {
        path: "/dashboard",
        component: BasicLayout,
        // routes: [
        //     {
        //         path: "/dashboard/pods",
        //         component: IndexLayout,
        //         routes: [
        //             {
        //                 path: "/dashboard/pods",
        //                 exact: true,
        //                 component: PodList,
        //             },
        //         ]
        //     }
        // ]
    },
    // {
        // path: '*',
        // component: NotFound
    // }
];

export default routes;