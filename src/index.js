import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Layout from './Components/Layout';
import Errorpage from './pages/Errorpage';
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost';
import About from './pages/About'
import Contact from './pages/Contact'
import AllPosts from './pages/AllPosts'
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PostsByCategory from "./Components/PostsByCategory"; // Import the component for displaying posts by category


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      <ScrollToTop />,
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "create", element: <CreatePost /> },
      { path: "post/:id/edit", element: <EditPost /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "allposts", element: <AllPosts /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "posts/categories/:category", element: <PostsByCategory /> }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  </React.StrictMode>
);
