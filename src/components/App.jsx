import React, { useState, useEffect, useCallback } from 'react';
import PostList from './PostList';
import SearchBar from './SearchBar';
import '../styles/style.scss';

const POSTS = [
  {category: 'Java Script', title: 'JavaScriptで作る電卓アプリ', date: '2019.8.14'},
  {category: 'CSS', title: 'CSS Flexbox レイアウト', date: '2019.8.10'},
  {category: 'Java Script', title: 'JavaScript（ES6）の開発環境を整える', date: '2019.7.20'},
  {category: 'Java Script', title: 'JavaScriptで作るTodoアプリ', date: '2019.8.14'},
  {category: 'CSS', title: 'CSS Grid レイアウト', date: '2019.6.24'},
  {category: 'React', title: 'Reactで作るTodoアプリ', date: '2019.6.5'},
];

const App = () => {
  const [filterText, setFilterText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(POSTS);

  useEffect(() => {
    if (filterText !== '') {
      onFilterPosts();
    } else {
      setFilteredPosts(POSTS);
    }
  }, [, filteredPosts, filterText]);

  const handleChange = async event => {
    await setFilterText(event.target.value);
  };

  const onFilterPosts = useCallback(() => {
    const newFilteredPosts = filteredPosts.filter((post) => {
      return post.title.toLowerCase().includes(filterText.toLowerCase())
    });
    setFilteredPosts(newFilteredPosts);
  }, [filterText]);

  return (
    <div className="app">
      <header className="app_header">
        <h1>React Filter Text</h1>
      </header>
      <main className="container">
        <SearchBar
          filterText={filterText}
          handleChange={handleChange} />
        <PostList posts={filteredPosts} />
      </main>
    </div>
  );
};

export default App;
