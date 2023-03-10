import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';

const App = () => (
    <>
        <Navigation />
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </>
);

export default App;
