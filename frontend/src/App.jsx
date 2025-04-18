import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Account';
import Transfer from './pages/Transaction';

function App() {
    return (
        <>
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/send" element={<Transfer />} />
                    </Routes>
                </BrowserRouter>
            </>
        </>
    );
}

export default App;
