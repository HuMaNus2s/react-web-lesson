import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './Pages/Home';

function App() {
  const getFromStorage = (key, defaultValue) => {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item);
    } catch (e) {
      const item = window.localStorage.getItem(key);
      return item !== null ? item : defaultValue;
    }
  };

  const [avatar, setAvatar] = useState(() => getFromStorage('avatar_', ''));
  const [name, setName] = useState(() => getFromStorage('username_', ''));
  const [age, setAge] = useState(() => getFromStorage('userage_', ''));
  const [savedAvatar, setSavedAvatar] = useState(() => getFromStorage('avatar', 'src\\assets\\react.svg'));
  const [savedName, setSavedName] = useState(() => getFromStorage('username', 'Undefined'));
  const [savedAge, setSavedAge] = useState(() => getFromStorage('userage', '?'));
  const [posts, setPosts] = useState(() => getFromStorage('posts', []));
  const [comments, setComments] = useState(() => getFromStorage('comments', []));

  useEffect(() => {
    window.localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    window.localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleSaveProfile = () => {
    if (!name.trim()) return;
    setSavedAvatar(avatar);
    setSavedName(name.trim());
    setSavedAge(age);
    localStorage.setItem('avatar', avatar);
    localStorage.setItem('username', name.trim());
    localStorage.setItem('userage', String(age));
  };

  const profileData = {
    avatar, setInputAvatar: setAvatar,
    name, setInputName: setName,
    age, setInputAge: setAge,
    savedAvatar,
    savedName, savedAge,
    onSave: handleSaveProfile
  };

  const postData = {
    posts, setPosts,
    comments, setComments
  };

  return (
    <HomePage 
      profileData={profileData}
      postData={postData}
    />
  );
}

export default App;