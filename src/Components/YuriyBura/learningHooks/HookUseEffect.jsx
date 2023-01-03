import { useState, useEffect } from "react";

function HookUseEffect() {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  const greeting = `Hello from useEffect !`;

  useEffect(()=>{
    console.log('mount')
    setVisible(()=> false);
  }, []);

  useEffect(()=>{
    console.log('update');
    return()=>console.log('unmount')
  });


  if(visible) {
    return (
      <>
        
        <h3>{greeting}</h3>
        <h4>{value}</h4>
        <PlanetInfo id = {value}/>
        <button onClick={()=> setValue((prev)=> +prev+1 )}>+ Pluss +</button>
        <br />
        <button onClick={()=> setValue(1)}>RESET</button>
        <br />
        <button onClick={()=> setVisible(false)}>Hidden</button>
        <br /><br />
        <hr /><br />

      </>
    )
  } else {
    return (
      <>
        <Notification/>
        <br />
        <button onClick={()=> setVisible(true)}>Show</button>
        <br /><br /><br />
        <hr />
      </>
    )
  }
}

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      setVisible(false)
    }, 2500);
    return ()=> clearTimeout(timer);
  }, [])


    return (
      <div>
        {visible && <p>HELLO </p>}
      </div>
    )

}

const PlanetInfo = ({id}) => {

  fetch(`https://swapi.dev/api/planets/${id}`)
    .then(res=> res.json())
    .then(data=> console.log(data.name))

  return (
    <div>{id} - Planet</div>
  )
}

export default HookUseEffect;