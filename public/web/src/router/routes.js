import Index from '@/views/Index'
import User from '@/views/Users'
import TreeIndex from '@/views/tree/TreeIndex'
import TreeChild from '@/views/tree/TreeChild'
import TreeSecond from '@/views/tree/TreeSecond'
import Mine from "@/views/Mine"
const routes = [
    { path: '/a', redirect: '/index' },
    { path : '/index',component : Index,},
    { path : '/user',component : User},
    {
        path : '/treeIndex',
        component : TreeIndex,
        children : [
            {
                path : '/treeIndex/treeChild',
                component : TreeChild
            },
            {
                path : '/treeIndex/treeSecond',
                component : TreeSecond
            }
        ]
    },
    { path : '/mine',component : Mine}
]
export default routes;