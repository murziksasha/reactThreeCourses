import { ClickedContext } from "../../mainMinin";

export default props => {
  return (
    <div style={{
      border: '1px solid grey',
      color: 'indigo'
    }}>
      <h3>Counter 2</h3>
      <ClickedContext.Consumer>
        {clicked => clicked ? <p>Clicked!</p> : null}
      </ClickedContext.Consumer>
    </div>
  )
}