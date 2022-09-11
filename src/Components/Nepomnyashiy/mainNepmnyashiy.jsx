import { Component } from 'react';

import './mainNepomnyashiy.css';

import Posts from './components/Posts';

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

  handleSomething = () => {
    console.log('App.jsx setState update');
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }


  render() {
    return(
    <div>
      <Posts posts = {this.state.posts} update ={this.handleSomething}
      removePost = {this.removePost}
      />
    </div>
    )

  }
}

export default Nepomnyashiy;