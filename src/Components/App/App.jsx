import React, {Component} from "react";


import "./App.css";
import Nepomnyashiy from "../Nepomnyashiy/mainNepmnyashiy"; 
import MainPetrechenko from "../Petrechenko/mainPetrechenko";


class Task extends Component {

  style = {
    margin: '30px',
  }

  state = {
    count: this.props.counter,
  }
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  
  changingCount = (num) => {
    this.setState(item => item.count < 50 && item.count > -50? ({count : item.count + num}): null)
  }

  reset = () => {
    this.setState({count: 0})
  }

  round = () => {
    this.setState({count: Math.floor(Math.random() * (50 - (-50) + 1)) + (-50)});
  }
  
  render() {
    return (
      <div className="app">
        <div style={this.style} className="counter">{this.state.count}</div>
        <div className="controls">
          <button className='btn btn-primary'
          onClick={() => this.changingCount(+1)}
           >INC</button>
          <button className ='btn btn-info'
                    onClick={() => this.changingCount(-1)}
          >DEC</button>
          <button className='btn btn-secondary'
          onClick={this.round}
          >RND</button>
          <button className='btn btn-danger'
          onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}


// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов






function App() {

  return (
    <Task counter={10}/>
    // <Nepomnyashiy/>
    // <MainPetrechenko/>
  )

}

export default App;
