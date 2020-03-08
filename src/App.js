import React, {Component} from 'react';
import {Input, Submit} from "./components/Form"
import {Container, FoodWrapper} from "./components/Containers"

class App extends Component {

  state = {
    foodToSave: "",
    foods: []
  }

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

submitFood = event => {
  event.preventDefault();
  this.setState(prevState => ({
    foods: [...prevState.foods, this.state.foodToSave]
  }))
  this.setState({foodToSave: ""})
}

deleteFood = value => {
  this.state.foods.splice(value, 1)
  let newFoods = this.state.foods
  this.setState({foods: newFoods})
}

render() {
  return (
    <Container>
      <span style={{fontSize: "100px"}}>
        <i class="fas fa-hamburger"></i>
      </span>       
     
      <FoodWrapper>
        {this.state.foods.map((food, index) =>(
          <div key={index} className="foods">
            <div>{food}</div>
            <button value={index} onClick={() => this.deleteFood(index)}>Devour it</button>
        </div>
        ))}

      </FoodWrapper>
      <form>
        <Input
          value={this.state.foodToSave}
          onChange={this.handleInputChange}
          name="foodToSave"
          type="text"
        />
        <Submit
          onClick={this.submitFood}
        />
        
      </form>
    </Container>
  );
}
}

export default App;
