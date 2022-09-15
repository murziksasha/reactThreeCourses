import { Component } from 'react';

import './mainNepomnyashiy.css';

import Posts from './components/Posts';

import Form from './components/Form/Form';

import MyTaskForm from './components/myTaskForm/MyTaskForm';

class Nepomnyashiy extends Component{
   cssStyle = {
    color: 'red',
    marginLeft: '20px'
  }

  state = {
    posts: [
      {id: 'abc1', name: 'JS Basics'},
      {id: 'abc2', name: 'JS Advanced'},
      {id: 'abc3', name: 'React JS'},
    ],
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }


  render() {
    const {posts} = this.state;

    return(
    <div>
      {/* <MyTaskForm/> */}
      <Form/>
      {/* <Posts posts = {posts}
      removePost = {this.removePost}
      /> */}
    </div>
    )

  }
}

export default Nepomnyashiy;