import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderRoutes from '../router/HeaderRoutesConfiguration'

class HomeComponent extends Component
{
constructor(){
super()
}

render(){
    return (
                <div className="container bg-light mx-auto" >
                    <HeaderRoutes username={this.props.match.params.user} role={this.props.match.params.role} />

                </div>
            )
}
}

export default HomeComponent