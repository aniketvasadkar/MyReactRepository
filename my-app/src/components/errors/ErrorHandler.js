import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorHandler extends Component
{
constructor(props){
        super(props)
            this.state = {
                        errorStatus : false,
                        info : null
                        }
            }

            componentDidCatch(error , info)
                                        {
                                            this.setState((state, props) => {
                                            return {
                                            errorStatus:error,
                                            info:info
                                            }
                                            }

                                            )
                                        }


            render(){
            if(this.state.errorStatus) {
                             return (
                               <React.Fragment>
                                 <div className="alert alert-danger alert-dismissible" >
                                    <strong> {this.state.errorStatus.toString()} </strong> !!!
                                </div>
                               </React.Fragment>
                             );
                           }
                           return this.props.children;}


}

export default ErrorHandler;