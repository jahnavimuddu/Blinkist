import MyLibrary from "./pages/MyLibrary";
import EntrepreneurshipPage from './pages/Entrepreneurship'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetailsPage from "./pages/BookDetails";
import { makeStyles } from "@mui/styles";
import LoginButton from './components/auth0/Login';
import LogoutButton from './components/auth0/Logout';
import {useAuth0} from '@auth0/auth0-react';
import React from 'react'


let useStyles = makeStyles({
  main: {

  }
})

function App() {
  let styles = useStyles()
  const {user, isAuthenticated} = useAuth0();
  return (
    
        
     <div className={styles.main}>
        <LoginButton />
        
        
        <React.Fragment>
        {isAuthenticated &&
        <Router>
          <Routes>
            <Route path="/" element={<MyLibrary />} />
            <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
            <Route path="/bookdetails" element={<BookDetailsPage /> } />
          </Routes>
        </Router>}
        </React.Fragment>

      </div>
  );
}

export default App;