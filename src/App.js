import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Callback from './pages/Callback';

export const UserContext = React.createContext(null);

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="App">
            <UserContext.Provider value={{ user, setUser }}>
                <Header />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route exact path="/callback" element={<Callback />}>
                            <Route exact path=":code" element={<Callback />} />
                        </Route>
                    </Routes>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
