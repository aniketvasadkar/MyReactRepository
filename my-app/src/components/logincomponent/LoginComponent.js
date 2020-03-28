import React , {Component}  from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Timer from '../propsstatedemo/Timer'
import Parent from '../childtoparentdata/Parent'
import ErrorHandler from '../errors/ErrorHandler'
import PropsStateDemoComponent from '../propsstatedemo/PropsStateDemoComponent'

class LoginComponent extends Component
{

constructor(props){
                            super(props)
                            this.state = {
                                            username:'',
                                            password:'',
                                            isLoggedIn:false
                                         }
                   }

setLoginDetails = (e) => {
                            const field = e.target.name;
                            const value = e.target.value;
                            console.log(field + ' -- '+ value);
                            this.setState(
                                            {
                                                [field]:value
                                            }
                                          )


                         }

login = (e) => {
                e.preventDefault();

                if(this.state.username === 'admin' && this.state.password === 'admin'){
                    alert('Login successful !!');
                    this.setState(
                    {isLoggedIn : true}
                    );
                    }
                else {
                    alert('Login failed !!!');
                     }


              }

render(){
    if(!this.state.isLoggedIn){
                return (
                <React.Fragment>
                        <div ><h3>Defect Tracker login</h3></div>
                        <div className="form-group">
                            <table>
                                <tr>
                                    <td> Username: </td><td><input type="text"
                                                                name="username"
                                                                placeholder='Enter username'
                                                                onChange={this.setLoginDetails}
                                                                className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><label className="">Password:</label>
                                    </td><td><input type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                    onChange={this.setLoginDetails}
                                                    className="form-control"/></td>
                                </tr>
                                <tr>
                                    <td><input type="button" value="Login" onClick={this.login} className="form-control btn btn-primary" /> </td>
                                 </tr>

                            </table>
                        </div>
                </React.Fragment>

                    )
               }else{

               return (
                <React.Fragment>
                       <ErrorHandler>
                           <Timer/>
                       </ErrorHandler>

                       <ErrorHandler>
                          <PropsStateDemoComponent/>
                       </ErrorHandler>

                       <Parent/>
                </React.Fragment>


               )
               }

             }


}

export default LoginComponent