
var Square =  require('Square.jsx');

var Board = React.createClass({
    renderSquare:function(i){
       return <Square value={i}/>
    },
    render:function(){
        return(
            <div className="board">
                <div className="status">現在玩家是 : X</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
});
module.exports = Board;