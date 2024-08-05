import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/HomePage';
import NewOrderForm from './components/NewOrderForm';
import SignupPage from './pages/Signup';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/main" element={<HomePage />} />
                <Route exact path="/signup" element={<SignupPage />} />
                <Route exact path="/neworder" element={<NewOrderForm />} />
                {/* <Route exact path="/new" element={<NewBill />} /> */}
            </Routes>
        </Router>
  );
}

export default App;
