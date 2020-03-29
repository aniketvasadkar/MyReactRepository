import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Timer extends Component
{
    constructor(props){
        super(props)
            this.state={
                        counter:0
                        }
    }

    start = (e) => {

                    this.setState({
                    counter: this.state.counter +1
                    })
                  }

    stop = () => {
                       clearInterval(this.interval)
                 }

    reset = () => {
                    clearInterval(this.interval)
                    this.setState({
                    counter : 0
                    })
                  }

    handleClick = () => {
                       this.interval = setInterval(this.start,100);
                      }

    render(){

            if(this.state.counter > 50){
                throw new Error('Counter exceeds value 50')
            }

            return (
                    <div className="">
                    <h1>{this.state.counter}</h1>

                    <div className="btn-group">
                    <Button className="btn btn-success border border-default rounded" onClick={this.handleClick}> Start Timer</Button>
                    <Button className="btn btn-success border border-default rounded" onClick={this.stop}> Stop Timer</Button>
                    <Button className="btn btn-danger border border-default rounded" onClick={this.reset}> Reset</Button>
                    </div>

                    </div>


                    )

            }

}

export default Timer;