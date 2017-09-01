
var Board = require('Board.jsx');

var Game = React.createClass({
   render:function(){
    return(
         <div className="game">
            <Board/>
            <div className="info">
                <div></div>
                <ol></ol>
            </div>
        </div>
    );
   }
});
module.exports = Game;