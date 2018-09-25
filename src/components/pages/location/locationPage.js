import React from 'react';

import {withGlobalState} from 'react-globally'

import Papa from 'papaparse';

class LocationPage extends React.Component {


    constructor() {
        super();

        // this.state = {
        //     postalCode: null,
        //     postalCodes :null
        // };

        fetch('data/postnr.txt')
            .then(response => response.text())
            .then(data => {
                console.log("csv lastet")
                this.setState({ postalCode:null, postalCodes: Papa.parse(data)})
            });
    }

    onButtonClicked() {

        console.log(this.state.postalCodes.data)
        var kommuneNavn;
        var kommuneNr;
        let postalCode = this.state.postalCode;
        this.state.postalCodes.data.forEach(function(postNummerData) {
            if(postNummerData[0] === postalCode) {
                kommuneNavn = postNummerData[1];
                kommuneNr = postNummerData[2];
            }

        });


        //TODO generer spørsmål med data fra ssb
        this.props.setGlobalState(prevGlobalState => ({
                questions: [
                    {
                        //Placeholder stuff
                        question: 'Spørsmål tekst for spørsmål 1 ('+kommuneNavn+', '+kommuneNr+')',
                        alternativeA: 'Svar A',
                        alternativeB: 'Svar B',
                        alternativeC: 'Svar C',
                        alternativeD: 'Svar D',
                        correctAnswer: 'Svar A',
                        userAnswer: null
                    },
                    {
                        //Placeholder stuff
                        question: 'Spørsmål tekst for spørsmål 2 ('+kommuneNavn+', '+kommuneNr+')',
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



    componentWillMount() {
        // this.readTextFile("data/postnr.txt");


    }
    updateInputValue(evt){
        this.setState({postalCode: evt.target.value});

    }

    render() {
        return <div>
            <span>Skriv in postnummer</span>
            <input type="text" name="name" maxLength={4} pattern="[0-9]*"  onChange={this.updateInputValue.bind(this)}/>
            <button onClick={this.onButtonClicked.bind(this)}>gå videre</button>
        </div>
    }


}


export default withGlobalState(LocationPage);