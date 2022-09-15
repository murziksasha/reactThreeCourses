

function Post (props) {
  const {id, name, removePost} = props;

  return <h2>
    <button onClick ={()=> removePost(id)}>DELETE</button>
    {name}</h2>
}

export default Post;