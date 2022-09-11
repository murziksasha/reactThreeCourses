import Post from './Post';

function Posts(props) {
  return <div>
    {
      props.posts.map (post => (
        <Post key = {post.id} name={post.name} update = {props.update}
        removePost = {props.removePost}
        id = {post.id}/>
      ))
    }

  </div>
}

export default Posts;