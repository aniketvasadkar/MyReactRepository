import React , { Component } from 'react';
import Child from './Child'
class Parent extends Component
{
constructor(props){
super(props)
this.state = {
                name:'name property from parent component'
            }
}

update = (newName) =>{
                    this.setState({name:newName})
                   }

render()
        {

        return (
        <React.Fragment>
        <h1>{this.state.name}</h1>
        <Child updateNameFunction={this.update} />
        </React.Fragment>
        )
        }

}

export default Parent;