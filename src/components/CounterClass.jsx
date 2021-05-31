import React, { Component } from 'react'
import {increment,decrement,asynceInc} from '../redux/actions/action'
import {connect} from 'react-redux'
class CounterClass extends Component {
    render() {
        return (
            <div>
                method 2
                <h1>Count: {this.props.counter}</h1>
                <button onClick={()=>this.props.increment()}>+</button>
                <button onClick={()=>this.props.decrement()}>-</button>
                <button onClick={()=>this.props.asynceInc()}>Async Increase</button>
            </div>
        )
    }
}

const mapStateToProps = (store) =>{
    return {
        counter: store.count
    }
}
const mapDispatchToProps = {
    increment,
    decrement,
    asynceInc,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass)

