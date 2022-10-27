import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Checkout from '../Pages/Checkout/Checkout';
import Courses from '../Pages/Courses/Courses';
import CoursesDetails from '../Pages/CoursesDetails/CoursesDetails';
import CoursesWithCatagoreis from '../Pages/CoursesWithCatagoreis/CoursesWithCatagoreis';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import FAQ from '../Pages/Others/FAQ';
import TermsAndConditions from '../Pages/Others/TermsAndConditions';
import privacyPolicy from '../Pages/Others/privacyPolicy';
import Register from '../Pages/Register/Register';
import RightSideBar from '../Pages/Shared/RightSideBar/RightSideBar';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import PrivateRoute from './PrivateRoute';




const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'courses',
                element:<Courses></Courses>,
                loader:()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'catagories/:catagories_id',
                element:<CoursesWithCatagoreis></CoursesWithCatagoreis>,
                loader:({params})=> fetch(`http://localhost:5000/catagories/${params.catagories_id}`)
            },
            {
                path:'courses/:id',
                element:<CoursesDetails></CoursesDetails>,
                loader:({params})=>fetch( `http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
                loader:()=>fetch('http://localhost:5000/blog')
            },
            {
                path:'/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/termsAndCondition',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/privacyPolicy',
                element: <privacyPolicy></privacyPolicy>
            },
          
          
        ]
    }
])

export default Routes;