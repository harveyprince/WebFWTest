/**
 * Created by harveyprince on 16/8/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
class Counter extends React.Component{
    render(){
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
                <h2>{value}</h2>
                <botton onClick={onIncrement}>+</botton>
                <botton onClick={onDecrement}>-</botton>
            </div>
        )
    }
}
const store = createStore(counter);
class App extends React.Component {
    render(){
        return (
            <Counter
                value={store.getState()}
                onIncrement={()=>{
                    store.dispatch({type:'INCREMENT'})
                }}
                onDecrement={()=>{
                    store.dispatch({type:'DECREMENT'})
                }}
            />
        )
    }
}
const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
}
store.subscribe(render);
render();
