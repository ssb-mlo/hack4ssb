import React from 'react';
import {withGlobalState} from 'react-globally'

class QuestionsPage extends React.PureComponent {

    constructor() {
        super();

        this.state = {
            userChoice: null,
            qid :0
        };
    }

    componentWillMount() {
        if (!this.gotQuestions()) {

        }
    }

    gotQuestions() {
        return this.props.globalState.questions.length > 0;
    }
    totalQuestions() {
        return this.props.globalState.questions.length;
    }

    onButtonClicked(args) {
        if (this.state.userChoice == null) {
            let question = this.props.globalState.questions[this.state.qid];
            if(args.target.id === 'correctAnswer'){
                this.setState({userChoice: question.correctAnswer});
            }else{
                this.setState({userChoice: "Wrong"});
            }
        }
    }

    onNextButtonClicked() {
        this.saveAnswer();
        if (this.state.qid + 1 < this.totalQuestions()) {
        this.setState(prevState=>({qid :prevState.qid +1, userChoice: null}));
        }else {
            this.props.history.push("/results")
        }
    }

    saveAnswer() {
        //Den sikkert mer riktige aprochen
        // this.setState({
        //     items: update(this.state.items, {1: {name: {$set: 'updated field name'}}})
        // })

        //Den late hackishe løsningen for update av ting i en array
        this.props.globalState.questions[this.state.qid].userAnswer = this.state.userChoice;
        this.forceUpdate()
    }


    render() {

        if (this.gotQuestions()) {

        let question = this.props.globalState.questions[this.state.qid];
        return <div className={"container"}>
            <div className="top">
                <span>{question.region}</span>
            </div>

            <div className="content">
                <div className={"questions"}>
                    <h2>Spørsmål {this.state.qid + 1}</h2>

                    <span>{question.question}</span>
                </div>

                <div className="alternative-answer">
                    {this.renderButtonsNumber( question.correctAnswer, question.enhet )}
                    {this.renderAnswer()}
                </div>
            </div>

        </div>

        } else {
            this.props.history.push("/")
            return <div>Ingen spørsmål funnet</div>
        }

    }

    renderButtonsNumber(svar, enhet) {
        var alternativ1 = Number(svar) * 1.2;
        var alternativ2 = Number(svar) * 0.5;
        var alternativ3 = Number(svar) * 0.3;
        var antallDesimal = (svar.split(".").length - 1);

        return <table>
            <tbody>
            <tr>
                <td><button id='correctAnswer' type="button" className="btn btn-outline-primary alternative-button" onClick={this.onButtonClicked.bind(this)}>{svar}{enhet}</button></td>
                <td><button id='alt_A' type="button" className="btn btn-outline-primary alternative-button" onClick={this.onButtonClicked.bind(this)}>{alternativ1.toFixed(antallDesimal)}{enhet}</button></td>
                <td><button id='alt_B' type="button" className="btn btn-outline-primary alternative-button" onClick={this.onButtonClicked.bind(this)}>{alternativ2.toFixed(antallDesimal)}{enhet}</button></td>
                <td><button id='alt_C' type="button" className="btn btn-outline-primary alternative-button" onClick={this.onButtonClicked.bind(this)}>{alternativ3.toFixed(antallDesimal)}{enhet}</button></td>
            </tr>
            </tbody>
        </table>
    }

    renderAnswer() {
        let question = this.props.globalState.questions[this.state.qid];
        if (this.state.userChoice == null){
            return ""
        }else if (this.state.userChoice === question.correctAnswer) {
            return(
                <div className={"answer"}>
                    <div className="alert alert-success" role="alert">Du svarte Riktig</div>
                    <button type="button" className="btn btn-primary btn-lg answer-button"  onClick={this.onNextButtonClicked.bind(this)}>Neste spørsmål</button>
            </div>
            )
        }else {
            return (
            <div className={"answer"}>
                <div className="alert alert-danger" role="alert">Du svarte desverre feil, Riktig svar er {question.correctAnswer} {question.enhet}</div>
                <button type="button" className="btn btn-primary btn-lg answer-button"  onClick={this.onNextButtonClicked.bind(this)}>Neste spørsmål</button>
            </div>
            )
        }
    }
}

export default withGlobalState(QuestionsPage);