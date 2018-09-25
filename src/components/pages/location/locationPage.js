import React from 'react';

import {withGlobalState} from 'react-globally'

class LocationPage extends React.Component {


    onButtonClicked() {
        //TODO generer spørsmål med data fra ssb
        this.props.setGlobalState(prevGlobalState => ({
                questions: [
                    {
                        //Placeholder stuff
                        question: 'Spørsmål tekst for spørsmål 1',
                        alternativeA: 'Svar A',
                        alternativeB: 'Svar B',
                        alternativeC: 'Svar C',
                        alternativeD: 'Svar D',
                        correctAnswer: 'Svar A',
                        userAnswer: null
                    },
                    {
                        //Placeholder stuff
                        question: 'Spørsmål tekst for sprøsmål nr 2',
                        alternativeA: 'Svar Z',
                        alternativeB: 'Svar F',
                        alternativeC: 'Svar Q',
                        alternativeD: 'Svar H',
                        correctAnswer: 'Svar H',
                        userAnswer: null
                    }
                ]
            })
        )
        this.props.history.push("/questions")
    }

    render() {
        return <div>
            <span>Placeholder for finn posisjon</span>
            <button onClick={this.onButtonClicked.bind(this)}>gå videre</button>
        </div>
    }


}


export default withGlobalState(LocationPage);