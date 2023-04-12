import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Counter from './components/counter';

const App = () => (
    <>
        <Navigation />
        <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </>
);

export default App;
