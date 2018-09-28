import React from 'react';

import {withGlobalState} from 'react-globally'

class ResultsPage extends React.Component {

    gotQuestions() {
        return this.props.globalState.questions.length > 0;
    }

    gotCorrectAnswers() {
        var riktigeSvar = 0;
        this.props.globalState.questions.forEach(function(answer) {
            if(answer.userAnswer === answer.correctAnswer) {
                riktigeSvar = riktigeSvar + 1;
            }
        });
        return riktigeSvar;
    }

    render() {
        if (this.gotQuestions()) {

            return (
                <div className={"container"}>
                    <div className="top">
                    </div>
                    <div className="content">
                        <h2>Oppsummering</h2>
                        {this.renderSummary()}
                    </div>
                </div>
            )

        } else {
            console.log("Ingen spørsmål funnet")
            this.props.history.push("/")
            return <div>Ingen spørsmål funnet</div>
        }

    }

    renderSummary() {
        var correctAnswer = this.gotCorrectAnswers();
        if (correctAnswer == 1){
            return (
                <div className={"answer"}>
                    <div className="alert alert-success" role="alert">
                        <h3>Du har 1 av 5 riktige svar</h3>
                        <p>Du svarte riktige på 20% av spørsmålene. Av alle som har tatt quizen om dette område er det 10% som har oppnådd denne scoren. Her har du lenke til kommunefakta og mer statistikk som kan hjelpe deg til å oppnå en bedre score.</p>
                    </div>
                </div>
            )
        }else if (correctAnswer == 2){
            return (
                <div className={"answer"}>
                    <div className="alert alert-success" role="alert">
                        <h3>Du har 2 av 5 riktige svar</h3>
                        <p>Du svarte riktig på 40% av spørsmålene. Av alle som har tatt quizen om dette område er det 17% som har oppnådd denne scoren. Her har du lenke til kommunefakta og mer statistikk som kan hjelpe deg til å oppnå en bedre score.</p>
                    </div>
                </div>
            )
        }else if (correctAnswer == 3){
            return (
                <div className={"answer"}>
                    <div className="alert alert-success" role="alert">
                        <h3>Du har 3 av 5 riktige svar</h3>
                        <p>Du svarte riktig på 60% av spørsmålene. Av alle som har tatt quizen om dette område er det 9% som har oppnådd denne scoren. Du kjenner de lokale forholdene forholdsvis godt. Her har du lenke til kommunefakta og mer statistikk som kan hjelpe deg til å oppnå en bedre score.</p>
                    </div>
                </div>
            )
        }else if (correctAnswer == 4){
            return (
                <div className={"answer"}>
                    <div className="alert alert-success" role="alert">
                        <h3>Du har 4 av 5 riktige svar</h3>
                        <p>Du svarte riktig på 80% av spørsmålene. Du kjenner lokale forholdene godt. 63% av de som har tatt quizen før deg er på samme nivå som deg.</p>
                    </div>
                </div>
            )
        }else if (correctAnswer == 5){
            return (
                <div className={"answer"}>
                    <div className="alert alert-success" role="alert">
                        <h3>Du har 5 av 5 riktige svar</h3>
                        <p>Du svarte riktig på 100% av spørsmålene. Kun 2% av de som har tatt quizen før deg kjenner de lokale forholdene like godt som deg.</p>
                    </div>
                </div>
            )
        }else {
            return (
                <div className={"answer"}>
                    <div className="alert alert-danger" role="alert">
                        <h3>Du har ingen riktig</h3>
                        <p>Sikker på at du vet hvor du befinner deg? Her har du lenke til kommunefakta og mer statistikk som kan hjelpe deg til å oppnå en bedre score.</p>
                    </div>
                </div>
            )
        }
    }

    renderSummaryGml() {
        const results = this.props.globalState.questions;
        return (
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
                                        : <div className="alert alert-danger" role="alert">Du svarte feil, riktig svar: {data.correctAnswer}</div>
                                }
                                <br/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


}


export default withGlobalState(ResultsPage);