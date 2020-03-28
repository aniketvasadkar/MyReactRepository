import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class PropsStateDemoComponent extends Component
{

    constructor(props){
        super(props)
            this.state={
            prop1:'prop1 value',
            prop2:'prop2 value',
            prop3:'prop3 value',
            counter : 0
            }
    }

increment = () => {

                    this.setState({
                    counter: this.state.counter +1

                    })

                   }

                   reset = () => {
                                       this.setState({
                                       counter: 0

                                       })

                                      }
    render(){
            if(this.state.counter > 5 ){
                    throw new Error("counter should be less than 6")
                    }
            return (
                    <React.Fragment>

                    <h1>{this.state.counter}</h1>
                    <div className="btn-group">
                    <button className="btn btn-success rounded" onClick={this.increment} >Hit me</button>
                    <button className="btn btn-danger rounded" onClick={this.reset} >Reset</button>
                    </div>
                    </React.Fragment>
            )
            }

}

export default PropsStateDemoComponent;