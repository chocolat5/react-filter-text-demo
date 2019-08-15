import React, { Component } from 'react';
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

class App extends Component {
  state = {
    filterText: '',
    posts: POSTS,
    filteredPosts: [],
  }

  componentDidMount() {
    this.setState({filteredPosts: this.state.posts})
  }

  handleChange = async event => {
    const { name, value } = event.target;

    await this.setState({
      [name]: value,
    });

    this.filterPosts();
  }

  filterPosts = () => {
    const { posts, filterText } = this.state;

    let filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(filterText.toLowerCase())
    });

    this.setState({ filteredPosts });
  }

  render () {
    const { filteredPosts, filterText } = this.state;

    return (
      <div className="app">
        <header className="app_header">
          <h1>React Filter Text</h1>
        </header>
        <main className="container">
          <SearchBar
            filterText={filterText}
            handleChange={this.handleChange} />
          <PostList
            posts={filteredPosts} />
        </main>
      </div>
    );
  }
}

export default App;
