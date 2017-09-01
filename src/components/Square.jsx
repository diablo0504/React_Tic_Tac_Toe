

 var Square=React.createClass({
    getInitialState:function(){
       return{
          value: null
       }
    },
    onClick:function(){
       this.setState({
           value:'X',
       })
    },
    render:function(){
                return (
                    <button className="square" onClick={this.onClick}>{this.state.value}</button>
                );
            }
});
module.exports = Square;