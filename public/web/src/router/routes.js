
import Home from '@/views/Home'
import Mine from "@/views/Mine"
import Login from '@/views/Login'
import Index from '@/views/Index'
import User from '@/views/Users'
import EditUser from '@/views/EditUser'
const routes = [
    { path: '/', component: Login },
    {
        path: '/user', component: User,
        children: [
            { path: '/user/editUser', component: EditUser, }
        ]
    },
    {
        path: '/index',
        component: Index,
        children: [
            { path: '/', component: Home },
            { path: '/mine', component: Mine }
        ]
    }
]
export default routes;