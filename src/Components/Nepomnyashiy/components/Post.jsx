

function Post (props) {
  const {id, name, removePost, update} = props;

  return <h2 onClick={update} >
    <button onClick ={()=> removePost(id)}>DELETE</button>
    {name}</h2>
}

export default Post;