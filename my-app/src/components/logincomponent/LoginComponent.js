import React , {Component}  from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from '../propsstatedemo/Timer'
import Parent from '../childtoparentdata/Parent'
import ErrorHandler from '../errors/ErrorHandler'
import PropsStateDemoComponent from '../propsstatedemo/PropsStateDemoComponent'
import UseStateHookDemo from '../hooks/UseStateHookDemo'
import HeaderRoutes from '../router/HeaderRoutesConfiguration'

class LoginComponent extends Component
{

constructor(props){
                            super(props)
                            this.state = {
                                            username:'',
                                            password:'',
                                            isLoggedIn:false,
                                            closeAlert: false
                                         }
                            this.userNameRef = React.createRef();
                            this.passwordRef = React.createRef();
                   }

setLoginDetails = (e) => {
                            const field = this.userNameRef.current.value;
                            const value = this.passwordRef.current.value;
                            console.log(field + ' -- '+ value);
                            this.setState(
                                            {
                                                [field]:value
                                            }
                                          )


                         }

login = (e) => {
                e.preventDefault();
                console.log(this.userNameRef.current.value + "--" +this.passwordRef.current.value);

                if(this.userNameRef.current.value === 'admin' && this.passwordRef.current.value === 'admin'){
                    this.setState(
                    {isLoggedIn : true}
                    );
                    }
                else {
                    alert('Login failed !!!');
                     }


              }

closeAlertFunction = (e) => { this.setState({closeAlert:true})}

render(){
    if(!this.state.isLoggedIn)
                {
                            return (<div className="container w-50 my-3">

                                        <div className="container px-5 py-5 bg-info border rounded">

                                        <div className="form-group">
                                        <h3 className="text-white" >Tracker login</h3>

                                                             <input type="text"
                                                                                name="username"
                                                                                placeholder='Enter username'
                                                                                ref = {this.userNameRef}
                                                                                className="form-control" />
                                        </div>

                                        <div className="form-group">

                                                    <input type="password"
                                                                    name="password"
                                                                    placeholder="Enter password"
                                                                    ref = {this.passwordRef}
                                                                    className="form-control"/>
                                        </div>

                                         <div className="form-group">
                                                  <input type="button" value="Sign in" onClick={this.login} className="form-control btn btn-success" />
                                          </div>


                                    </div>
                                    </div>)
               }else{

                        if(this.state.closeAlert)
                        {
                                       return (
                                                <div className="container bg-light mx-auto">
                                                    <HeaderRoutes/>
                                                </div>)
                       }else{
                                        return (<div className="container bg-light mx-auto">
                                                           <div className="alert alert-success alert-dismissible" >
                                                                 <a href="#" className="close" data-dismiss="alert" aria-label="close" onClick={this.closeAlertFunction}>&times;</a>
                                                                 Login successful !!!
                                                           </div>
                                                    <HeaderRoutes/>

                                                 </div>)
                            }
               }

             }


}

export default LoginComponent