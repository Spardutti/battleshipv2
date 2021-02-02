import React from "react";
import "materialize-css/dist/css/materialize.min.css"


const ComputerBoard = props => {

    return ( 
        <div className="player">
            <h1 className="center-align">Computer</h1>
            <div className="board-grid center-align">
            {props.board.map((e, index) => {
                return (
                    <div className="">
                        {e.map(col => {
                            return (
                                <div className="squares center-align"></div>
                            )
                        })}
                    </div>
                    
                )
            })}
                </div>
        </div>
    )
}

export default ComputerBoard
