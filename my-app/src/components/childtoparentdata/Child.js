import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Child extends Component
{

constructor(props){
super(props)
this.state = {

            }
}

update = () => {
                this.props.updateNameFunction('name property updated from child component button click');
                }

render()
        {

        return (
        <Button className="btn btn-success" onClick={this.update} >Update parent property</Button>
                )
        }

}

export default Child;