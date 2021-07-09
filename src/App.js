import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"What needs to be done?",totalTask:1,taskList:[{id:1,task:"Task1",done:false}]};    
  }
  checkBox=(event)=>{
    console.log(event);
  }
  render(){
    return(
      <div className="mainClass">
        <div className="mainBox">
          <div className="divh1">
            <h1>Todo App</h1>
          </div>
          <input className="enterBox" type="text"
          onKeyPress={(event)=>{
            
            if(event.key=="Enter"){
              event.preventDefault();
              this.setState({taskList:[...this.state.taskList,{id:Math.random(),task:event.target.value,done:false}]});
              console.log(this.state.taskList);
              event.currentTarget.value = "";
            }
          }} placeholder="What needs to be done?"></input>
          <div className="contentCards">
            {this.state.taskList.map((list)=>{
              return(
                <div className="card" key={list.id}>
                  <input type="checkbox" key={list.id}
                  onChange={this.checkBox}
                  style={{width:"30px",height:"30px",
                  borderRadius:"15px"
                   }}></input>
                  <span className="task">{list.task}</span>
                  
                </div>);
            })}
          </div>
          <div className="cardButton">
            <span>{this.state.totalTask} item left</span>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;