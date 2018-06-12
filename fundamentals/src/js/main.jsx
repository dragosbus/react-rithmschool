import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[
                {id:1,value:"Create react app"}
            ]
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(newTask) {
        this.setState(prevState=>{
            return {
                tasks: prevState.tasks.concat(newTask)
            }
        },()=>console.log(this.state.tasks));
    }

    render() {
        return(
            <div className="app">
                <h1>ToDo App</h1>
                <AddTaskForm addTask={this.addTask}/>
                <Tasks tasks={this.state.tasks}/>
            </div>
        );
    }
}

const Tasks = props =>{
    return(
        <ul>
            {props.tasks.map(task=> <ElementTask key={task.id} value={task.value}/>)}
        </ul>
    );
}

const ElementTask = props =>{
    return(
        <li>{props.value}</li>
    );
};

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 2
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        let newTask = {
            id: this.state.id,
            value: this._value.value
        }
        this.props.addTask(newTask);
        this.setState({
            id: this.state.id + 1
        });
    }

    render() {
        return(
            <form onSubmit={this.addTask}>
                <input type="text" ref={val=>this._value = val}/>
                <button type="submit">Add</button>
            </form>
        );
    }
}

render(<App/>, document.getElementById('root'));