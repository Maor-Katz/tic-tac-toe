import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {library} from "@fortawesome/fontawesome-svg-core/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrophy} from '@fortawesome/free-solid-svg-icons'
import {faGamepad} from "@fortawesome/free-solid-svg-icons/index";


export class GameStarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEndGame: false,
            result: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            roundTurn: false,
            xTurn: true,
            xWin: false,
            circleWin: false,
            arr1: ['topLeft', 'topMiddle', 'topRight'],
            arr2: ['middleLeft', 'middleMiddle', 'middleRight'],
            arr3: ['bottomLeft', 'bottomMiddle', 'bottomRight'],
        }

    }

    customStyles = {
        content: {
            top: '20%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '300px',
            backgroundColor: 'darkturquoise',
            display: 'grid'
        }
    };
    clickHandler = (indexLine, locationLine, event) => {
        let {xTurn, roundTurn, result, circleWin, xWin} = this.state
        const t = indexLine
        const y = locationLine
        const z = event
        debugger
        if (roundTurn) {
            event.target.firstChild.className += ' circle';
            result[indexLine] = 2;
        }
        if (xTurn) {
            event.target.firstChild.className += ' xSymbol';
            result[indexLine] = 1;
        }

        this.setState({
            roundTurn: !roundTurn,
            xTurn: !xTurn,
            result
        })
        //check if circle won
        if ((result[0] === 2 && result[1] === 2 && result[2] === 2) || (result[3] === 2 && result[4] === 2 && result[5] === 2) || (result[6] === 2 && result[7] === 2 && result[8] === 2) || (result[0] === 2 && result[4] === 2 && result[8] === 2) || (result[2] === 2 && result[4] === 2 && result[6] === 2) || (result[0] === 2 && result[3] === 2 && result[6] === 2) || (result[1] === 2 && result[4] === 2 && result[7] === 2) || (result[2] === 2 && result[5] === 2 && result[8] === 2)) {
            setTimeout(function () {
                this.setState({circleWin: true});
            }.bind(this), 500);
        }
        // check if x won
        if ((result[0] === 1 && result[1] === 1 && result[2] === 1) || (result[3] === 1 && result[4] === 1 && result[5] === 1) || (result[6] === 1 && result[7] === 1 && result[8] === 1) || (result[0] === 1 && result[4] === 1 && result[8] === 1) || (result[2] === 1 && result[4] === 1 && result[6] === 1) || (result[0] === 1 && result[3] === 1 && result[6] === 1) || (result[1] === 1 && result[4] === 1 && result[7] === 1) || (result[2] === 1 && result[5] === 1 && result[8] === 1)) {
            setTimeout(function () {
                this.setState({xWin: true});
            }.bind(this), 500);
        }
    }
    resetGame = () => {
        const selectionElements = document.getElementsByClassName("selection")
        Object.values(selectionElements).map(square => square.className='selection')
        this.setState({
            result: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            roundTurn: false,
            xTurn: true,
            xWin: false,
            circleWin: false
        })
    }

    render() {
        const {roundTurn, xTurn, result, xWin, circleWin, arr1, arr2, arr3} = this.state
        debugger

        library.add(faTrophy)
        return (
            <div className="gameStart">
                {
                    <div className="game">
                        {(circleWin == true || xWin == true) ?
                            <Modal
                                isOpen={true}
                                style={this.customStyles}
                                ariaHideApp={false}
                            >
                                <div className="winnerLine">
                                    <div className="winner">The winner is</div>
                                    {circleWin ? <div className="theWinner">Circle</div> :
                                        <div className="theWinner">X</div>}
                                    <div className="trophy">
                                        <FontAwesomeIcon icon="trophy"/>
                                    </div>
                                </div>
                                <button className="newGame" onClick={() => this.resetGame()}>Click to Start New
                                    Game
                                </button>
                            </Modal> : null
                        }
                        <div className="lineTop">{arr1.map((firstLine, index) => <div className="emptySquare"
                                                                                      key={index}
                                                                                      onClick={(event) => this.clickHandler(index, 'upperLine', event)}
                                                                                      ref={this.myRef}>
                            <div className="selection"></div>
                        </div>)}</div>
                        <div className="lineMiddle">{arr2.map((firstLine, index) => <div className="emptySquare"
                                                                                         key={index}
                                                                                         onClick={(event) => this.clickHandler(index + 3, 'middleLine', event)}>
                            <div className="selection"></div>
                        </div>)}</div>
                        <div className="lineBottom">{arr3.map((firstLine, index) => <div className="emptySquare"
                                                                                         key={index}
                                                                                         onClick={(event) => this.clickHandler(index + 6, 'bottomLine', event)}>
                            <div className="selection"></div>
                        </div>)}</div>
                    </div>
                }
            </div>
        );
    }
}