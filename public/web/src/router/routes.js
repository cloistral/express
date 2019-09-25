import Index from '@/views/Index'
import User from '@/views/Users'
import EditUser from '@/views/EditUser'
import TreeIndex from '@/views/tree/TreeIndex'
import TreeChild from '@/views/tree/TreeChild'
import TreeSecond from '@/views/tree/TreeSecond'
import Mine from "@/views/Mine"
import Login from '@/views/Login'
import AddUserChild from '@/views/AddUserChild'
const routes = [
    { path: '/a', redirect: '/index' },
    { path: '/index', component: Index, },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '/user/editUser',
                component: EditUser,
                props: (route) => ({ options: route.query.options })
            }
        ]
    },
    { path: '/login', component: Login },
    {
        path: '/treeIndex',
        component: TreeIndex,
        children: [
            {
                path: '/treeIndex/treeChild',
                component: TreeChild
            },
            {
                path: '/treeIndex/treeSecond',
                component: TreeSecond
            }
        ]
    },
    { path: '/mine', component: Mine },
    { path: '/user/addUserChild', component: AddUserChild },
]
export default routes;