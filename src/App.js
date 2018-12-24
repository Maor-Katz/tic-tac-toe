import React, {Component} from 'react';

import './App.css';
import {WelcomePage} from "./WelcomePage";
import {GameStarted} from "./GameStarted";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGamepad} from '@fortawesome/free-solid-svg-icons'
// import {faBrain} from "@fortawesome/free-solid-svg-icons/index";
import {library} from "@fortawesome/fontawesome-svg-core/index";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {gameStarted: false}
    }

    startGame = () => {
        let {gameStarted} = this.state
        this.setState({gameStarted: !gameStarted})

    }

    render() {
        let {gameStarted} = this.state
        library.add(faGamepad)
        return (

            <div className="App">
                <div className="App-header">
                    <h1> MK APP < /h1>

                </div>
                <h1 className="titleGame">
                    tic-tac-toe <FontAwesomeIcon icon="gamepad"/>
                </h1>
                {!gameStarted ?
                    <WelcomePage startGame={this.startGame}/>
                    :
                    <GameStarted startGame={this.startGame}/>
                }
            </div>

    )  }}

    export default App;
