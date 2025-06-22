import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router'
import "./components/Admin/Editor.css"
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID ="164858178950-3d6tfh29qo453eg38odnvkobtdfrrlhv.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<GoogleOAuthProvider clientId={CLIENT_ID}>
<App />
</GoogleOAuthProvider>
 </BrowserRouter>
   
  </StrictMode>,
)
