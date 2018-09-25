import React from 'react';

class QuestionsPage extends React.PureComponent {

    constructor() {
        super();

        this.state = {
            userChoice: null
        };
        //Placeholder stuff
        this.question = 'Spørsmål tekst';
        this.alternativeA = 'Svar A';
        this.alternativeB = 'Svar B';
        this.alternativeC = 'Svar C';
        this.alternativeD = 'Svar D';
        this.answer = this.alternativeA;
    }


    onButtonClicked(args) {
        if (this.state.userChoice == null) {
            switch (args.target.id) {
                case 'Button A':
                    this.setState({userChoice: this.alternativeA});
                    break;
                case 'Button B':
                    this.setState({userChoice: this.alternativeB});
                    break;
                case 'Button C':
                    this.setState({userChoice: this.alternativeC});
                    break;
                case 'Button D':
                    this.setState({userChoice: this.alternativeD});
                    break;
            }
            console.log(this.userChoice)
        }
    }

    onNextButtonClicked() {
        alert("TODO gå til neste spm");
    }


    render() {
        return <div>
            <h2>Placeholder for side med spørsmål</h2>

            <span>{this.question}</span>
                <table>
                <tbody>
                <tr>
                    <td><button id='Button A' onClick={this.onButtonClicked.bind(this)}>{this.alternativeA}</button></td>
                    <td><button id='Button B' onClick={this.onButtonClicked.bind(this)}>{this.alternativeB}</button></td>
                </tr>
                <tr>
                    <td><button id='Button C' onClick={this.onButtonClicked.bind(this)}>{this.alternativeC}</button></td>
                    <td><button id='Button D' onClick={this.onButtonClicked.bind(this)}>{this.alternativeD}</button></td>
                </tr>
                </tbody>
                </table>
            {this.renderAnswer()}
        </div>
    }

    renderAnswer() {
        if (this.state.userChoice == null){
            return ""
        }else if (this.state.userChoice === this.answer) {
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

export default QuestionsPage;