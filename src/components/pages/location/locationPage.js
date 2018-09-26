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

        fetch('data/data-kommnr.txt')
            .then(response => response.text())
            .then(dataKommune => {
                console.log("csv kommuner lastet")
                this.setState({ kommuneCode:null, kommuneCodes: Papa.parse(dataKommune)})
            });
    }

    onButtonClicked() {

        console.log(this.state.postalCodes.data)
        var kommuneNavn;
        var kommuneNr;

        if(this.state.postalCode === null){
            kommuneNavn = "OSLO";
            kommuneNr = "0301";
        }
        let postalCode = this.state.postalCode;
        this.state.postalCodes.data.forEach(function(postNummerData) {
            if(postNummerData[0] === postalCode) {
                kommuneNavn = postNummerData[3];
                kommuneNr = postNummerData[2];
            }
        });

        var inntekt = this.getValueByPosition(2, kommuneNr);
        var avfall = this.getValueByPosition(3, kommuneNr);


        //TODO generer spørsmål med data fra ssb
        this.props.setGlobalState(prevGlobalState => ({

                questions: [
                    {
                        //Placeholder stuff
                        question: 'Hva tror du er er husholdningers gjennomsnittlig inntekt i din kommune',
                        alternativeA: inntekt,
                        alternativeB: 'Svar B',
                        alternativeC: 'Svar C',
                        alternativeD: 'Svar D',
                        correctAnswer: inntekt,
                        userAnswer: null,
                        region: kommuneNavn,
                        regionnr: kommuneNr,
                        icon: 'inntekt.png'
                    },
                    {
                        //Placeholder stuff
                        question: 'Hvor mange tonn husholdningsavfall ble hentet i fjor',
                        alternativeA: 'Svar Z',
                        alternativeB: 'Svar F',
                        alternativeC: avfall,
                        alternativeD: 'Svar H',
                        correctAnswer: avfall,
                        userAnswer: null,
                        region: kommuneNavn,
                        regionnr: kommuneNr,
                        icon: 'avfall.png'
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

    getValueByPosition(position, regionNr){
        var kommuneVerdi;
        this.state.kommuneCodes.data.forEach(function(kommuneNummerData) {
            if(kommuneNummerData[0] === regionNr) {
                kommuneVerdi = kommuneNummerData[position];
            }
        });

        return kommuneVerdi;

    }

    render() {
        return <div className={"container"}>
            <div className="top"/>
                <div className="geo-sok">
                    <label for="region-input">Hvor bor du?</label>
                    <input type="text" className="form-control" id="region-input" placeholder="Postnr" onChange={this.updateInputValue.bind(this)}></input>
                    <button type="button" className="btn btn-lg btn-primary"  onClick={this.onButtonClicked.bind(this)}>Kjør Quiz</button>
                </div>
            </div>
    }

}


export default withGlobalState(LocationPage);