import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            red:ReactDom.findDOMNode(this.refs.red).value,
            green:ReactDom.findDOMNode(this.refs.green).value,
            blue:ReactDom.findDOMNode(this.refs.blue).value
        });
    }
    render(){
        return (
            <div>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br />
                <Slider ref="blue" update={this.update} />
                {this.state.blue}
                <br />
            </div>
        )
    }
}
class Slider extends React.Component {
    render(){
        return (
            <input type="range" min="0" max="255" onChange={this.props.update} />
        )
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
);
