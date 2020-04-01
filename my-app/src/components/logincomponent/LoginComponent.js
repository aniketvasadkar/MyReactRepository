import React , {Component}  from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

class LoginComponent extends Component
{

constructor(props){
                            super(props)
                            this.state = {
                                            username:'',
                                            password:''
                                         }
                            this.userNameRef = React.createRef();
                            this.passwordRef = React.createRef();
                            this.roleRef = React.createRef();
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

                if(this.userNameRef.current.value === 'Aniket V' && this.passwordRef.current.value === 'Aniket V')
                    {
                        this.props.history.replace('/home/'+this.userNameRef.current.value+'/'+this.roleRef.current.value);
                    }
                else {
                    alert('Login failed !!!');
                     }

              }


render(){
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

                                                    <select className="form-control" ref={this.roleRef} >
                                                        <option>Admin</option>
                                                        <option>Developer</option>
                                                        <option>Tester</option>
                                                    </select>
                                        </div>


                                         <div className="form-group">
                                                  <input type="button" value="Sign in" onClick={this.login} className="form-control btn btn-success" />
                                          </div>


                                    </div>
                                    </div>)

             }
}

export default LoginComponent