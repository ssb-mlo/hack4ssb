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
                <div className={"container"}>
                    <div className="top">
                    </div>
                    <div className="content">
                        <h2>Oppsummering</h2>
                        <div className="result">
                            {
                                results.map(function (data, it) {
                                    return (
                                        <div>
                                            <h4>Spørsmål {it + 1}</h4>
                                            <div>{data.question}?</div>
                                            {
                                                data.correctAnswer === data.userAnswer
                                                    ? <div className="alert alert-success" role="alert">Du svarte riktig: {data.userAnswer}</div>
                                                    : <div className="alert alert-danger" role="alert">Feil: Du svarte {data.userAnswer} , Riktig svar: {data.correctAnswer}</div>
                                            }
                                            <br/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
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