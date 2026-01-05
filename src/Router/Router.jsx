import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home"

let Router = [
    {path: '/' , element: <Layout/>, children:[
        {index:true,path:'/',element: <Home /> }
    ] },
]

export default Router