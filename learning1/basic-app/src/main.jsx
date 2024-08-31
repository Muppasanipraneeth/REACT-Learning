import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Comments from './Comments'
// import LoginPage from './LoginPage'
// import Lottory from './Lotorry'
// import TodoList from './Todo'
// import Ludo from './Ludo'
// import Movie from './Movie.jsx'
// import Form from './Form.jsx'
// import Like from './Like.jsx'
// import Apps from './harkirath.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Movie /> */}
    {/* <Form />
    <Like />
    <Apps /> */}
    {/* <TodoList/> */}
    {/* <Lottory/> */}
    {/* <LoginPage /> */}
    <Comments />
  </StrictMode>,
)
