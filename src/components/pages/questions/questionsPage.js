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
            switch (args.target.id) {
                case 'Button A':
                    this.setState({userChoice: question.alternativeA});
                    break;
                case 'Button B':
                    this.setState({userChoice: question.alternativeB});
                    break;
                case 'Button C':
                    this.setState({userChoice: question.alternativeC});
                    break;
                case 'Button D':
                    this.setState({userChoice: question.alternativeD});
                    break;
            }
            console.log(this.userChoice)
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
            <h2>Placeholder for side med spørsmål</h2>
            <span>{this.question}</span>
                <table>
                <tbody>
                <tr>
                    <td><button id='Button A' onClick={this.onButtonClicked.bind(this)}>{question.alternativeA}</button></td>
                    <td><button id='Button B' onClick={this.onButtonClicked.bind(this)}>{question.alternativeB}</button></td>
                </tr>
                <tr>
                    <td><button id='Button C' onClick={this.onButtonClicked.bind(this)}>{question.alternativeC}</button></td>
                    <td><button id='Button D' onClick={this.onButtonClicked.bind(this)}>{question.alternativeD}</button></td>
                </tr>
                </tbody>
                </table>
            {this.renderAnswer()}
        </div>

        } else {
            console.log("Ingen spørsmål funnet")
            this.props.history.push("/")
            return <div>Ingen spørsmål funnet</div>
        }

    }

    renderAnswer() {
        let question = this.props.globalState.questions[this.state.qid];
        if (this.state.userChoice == null){
            return ""
        }else if (this.state.userChoice === question.correctAnswer) {
            return(
                <div>
                <span>Du svarete Riktig</span>
                <button onClick={this.onNextButtonClicked.bind(this)}>Neste spørsmål</button>
            </div>
            )
        }else {
            return (
            <div>
                <div>Du svarete feil</div>
                <button onClick={this.onNextButtonClicked.bind(this)}>Neste spørsmål</button>
            </div>
            )
        }
    }
}

export default withGlobalState(QuestionsPage);