import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faGamepad  } from '@fortawesome/free-solid-svg-icons'
import ticTakToe from './ticTakToe.png';

export class WelcomePage extends React.Component {

    render() {
        library.add(faGamepad, faBrain)

        return <div className="welcome">


            <button className="startButton" onClick={() => {this.props.startGame(); this.props.startGame()}}>Click to Start New Game</button>

            <div className="brainAndImage">
                <div className="ticTacToeImage"><img src={ticTakToe}/></div>
                <div className="brainIcon">
                    <FontAwesomeIcon icon="brain"/>
                </div>
            </div>
        </div>;
    }
}