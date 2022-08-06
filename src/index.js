import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-router-dom"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App"

const container =document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)