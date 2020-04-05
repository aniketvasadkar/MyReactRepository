import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'

import buyCake from '../redux/action'

function CakeContainer(props){
    return (
            <div>
                <h1>No of cakes in inventory {props.numCake}</h1>
                <button  className="btn btn-primary" onClick= {props.buy} >Buy Cake</button>
            </div>
            )
}

const mapStateToProps = (state) => {
        return {
                numCake:state.noOfCakes
            }
}

const mapDispatchToProps = (dispatch) => {
        return {
                buy: () =>  dispatch(buyCake())
                }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
