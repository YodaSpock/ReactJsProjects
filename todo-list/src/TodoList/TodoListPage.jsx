import React from "react";
import ListItem from "./ListItem";


export default class TodoListPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    
        this.addItem = this.addItem.bind(this);
    }

    
    addItem(e){

    }

    render() {
        return (

            <div>
                <form onSubmit={this.addItem}>
                    <input placeholder = "enter task"></input>
                    <button type = "submit">Add Task</button>
                </form>
            </div>
        )
    }
}