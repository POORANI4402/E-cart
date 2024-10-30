import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/assets/Home/home'; 
import FormPage from './components/assets/FormPage/FormPage'; 
import ApplicationPage from './components/assets/ApplicationPage/ApplicationPage'; 

function App() {
    return (
        <Router>
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
                <Route path="/form" element={<FormPage />} /> {/* Use element prop instead of component */}
                <Route path="/application" element={<ApplicationPage />} /> {/* Use element prop instead of component */}
            </Routes>
        </Router>
    );
}

export default App;
