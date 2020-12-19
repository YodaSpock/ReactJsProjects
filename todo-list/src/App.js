import { Component} from 'react';

class App extends Component {

  
  constructor(props){
    super(props);
    this.state = {
      currentItem: "",
      listOfItems: []
    }

    this.handleChangeItem = this.handleChangeItem.bind(this);
  }

  addItem() {
    console.log("Add Item");
    console.log(this.state.currentItem);
    this.setState(prevState => ({
        listOfItems: [...prevState.listOfItems, this.state.currentItem]
      })
    );

    console.log('List of Items:', this.state.listOfItems);
  }

  handleChangeItem(event) {
    this.setState({currentItem: event.target.value})
  }


  render() {
    return (
      <div>
        <div>
          Add an Item...
          <br/>
          <input type = "text" placeholder = "Type item here..." onChange = {this.handleChangeItem}/>
          <button onClick = {() => this.addItem()}>Add</button>
          {this.state.listOfItems.map(item => (
            <p>{item}</p>
          ))}
        
        </div>
      </div>
    );
  }
}
export default App;
