import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/UserCard.jsx'
import PostForm from './components/PostForm.jsx'

function App() {

  const getFromStorage = (key, defaultValue) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Ошибка чтения localStorage:', e);
      return defaultValue;
    }
  };

  const [posts, setPosts] = useState(() => 
    getFromStorage('posts', [])
  );
  
  const [comments, setComments] = useState(() => 
    getFromStorage('comments', [])
  );

  useEffect(() => {
    window.localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    window.localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <UserCard />
      <PostForm 
      posts={posts}
      setPosts={setPosts}
      comments={comments}
      setComments={setComments}
      />
      <br /> <br /><br />
    </>
  )
}

export default App;
