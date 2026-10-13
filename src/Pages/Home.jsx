import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Profile from '../components/Profile';
import PostForm from '../components/PostForm';
import Settings from './Settings.jsx';

function HomePage({ profileData, postData }) {
  const location = useLocation();

  return (
    <div className="container py-4" style={{ maxWidth: '800px' }}>
      <nav className="d-flex justify-content-center gap-3 mb-4">
        <Link 
          to="/" 
          className={`btn ${location.pathname === '/' ? 'btn-primary shadow-sm' : 'btn-outline-primary'}`}
        >
          Главная
        </Link>
        <Link 
          to="/settings" 
          className={`btn ${location.pathname === '/settings' ? 'btn-primary shadow-sm' : 'btn-outline-primary'}`}
        >
          Настройки
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <Profile data={profileData} />
            <PostForm data={postData} />
          </>
        } />
        
        <Route path="/settings" element={
          <Settings data={profileData}/>
        } />
      </Routes>
    </div>
  );
}

export default HomePage;