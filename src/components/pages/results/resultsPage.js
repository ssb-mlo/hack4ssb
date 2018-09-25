import React from 'react';

import {withGlobalState} from 'react-globally'

class ResultsPage extends React.Component {

    gotQuestions() {
        return this.props.globalState.questions.length > 0;
    }

    render() {
        if (this.gotQuestions()) {

            const results = this.props.globalState.questions;
            return (
                <div>
                    {
                        results.map(function (data, it) {
                            return (
                                <div>
                                    <div>Spørsmål {it}</div>
                                    <div>{data.question}</div>
                                    <div>Riktig svar: {data.correctAnswer}</div>
                                    <div>Du svarte: {data.userAnswer}</div>
                                    <br/>
                                </div>
                            )
                        })
                    }
                </div>
            )

        } else {
            console.log("Ingen spørsmål funnet")
            this.props.history.push("/")
            return <div>Ingen spørsmål funnet</div>
        }

    }


}


export default withGlobalState(ResultsPage);