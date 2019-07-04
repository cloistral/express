import Index from '@/views/Index'
import User from '@/views/Users'
import TreeIndex from '@/views/tree/TreeIndex'
const routes = [
    {
        path : '/',
        component : Index,
    },
    {
        path : '/user',
        component : User
    },
    {
        path : '/treeIndex',
        component : TreeIndex
    }
]
export default routes;