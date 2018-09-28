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
                this.setState({ postalCode:null, postalCodes: Papa.parse(data)})
            });

        fetch('data/data-kommnr.txt')
            .then(response => response.text())
            .then(dataKommune => {
                this.setState({ kommuneCode:null, kommuneCodes: Papa.parse(dataKommune)})
            });
    }

    onButtonClicked() {

        var kommuneNavn;
        var kommuneNr;
        var kommuneNrData;

        let postalCode = this.state.postalCode;

        //Viser oslo som default
        if(!postalCode){
            postalCode = "0301";
        }

        this.state.postalCodes.data.forEach(function(postNummerData) {
            if(postNummerData[0] === postalCode) {
                kommuneNavn = postNummerData[3];
                kommuneNr = postNummerData[2];
            }
        });

        this.state.kommuneCodes.data.forEach(function(kommuneNummerData) {
            if(kommuneNummerData[0] === kommuneNr) {
                kommuneNrData = kommuneNummerData[0];
            }
        });

        //Hvis ikke kommunen ligger i datafilen, vis oslo
        if(!kommuneNrData){
            kommuneNavn = "OSLO";
            kommuneNr = "0301";
        }

        var question1 = this.getValueByPosition(2, kommuneNr);
        var question2 = this.getValueByPosition(3, kommuneNr);
        var question3 = this.getValueByPosition(4, kommuneNr);
        var question4 = this.getValueByPosition(5, kommuneNr);
        var question5 = this.getValueByPosition(6, kommuneNr);


        //TODO generer spørsmål med data fra ssb
        this.props.setGlobalState(prevGlobalState => ({

                questions: [
                    {
                        //Placeholder stuff
                        question: 'Hva er husholdningers gjennomsnittlig inntekt i din kommune?',
                        correctAnswer: question1,
                        userAnswer: null,
                        region: kommuneNavn,
                        regionnr: kommuneNr,
                        enhet: ' kr',
                        alternativeViewer: 'buttonNumber'
                    },
                    {
                        //Placeholder stuff
                        question: 'Hvor stor arbeidsledighet er det i din kommune?',
                        correctAnswer: question2,
                        userAnswer: null,
                        region: kommuneNavn,
                        regionnr: kommuneNr,
                        enhet: '%',
                        alternativeViewer: 'buttonNumber'
                    }
                    ,
                    {
                        //Placeholder stuff
                        question: 'Hvor mange trafikkovertredelser ble anmeldt i din kommune det siste året?',
                        correctAnswer: question3,
                        userAnswer: null,
                        region: kommuneNavn,
                        regionnr: kommuneNr,
                        enhet: ' stk',
                        alternativeViewer: 'buttonNumber'
                    },
                    {
                        //Placeholder stuff
                        question: 'Hvor mange prosent av befolkningen mosjonerer aldri i ditt fylke?',
                        correctAnswer: question4,
                        userAnswer: null,
                        region: kommuneNavn,
                        regionnr: kommuneNr,
                        enhet: '%',
                        alternativeViewer: 'buttonNumber'
                    }
                    ,
                    {
                        //Placeholder stuff
                        question: 'Hvor mange prosent spiser vanligvis grønnsaker eller salat daglig  i ditt fylke?',
                        correctAnswer: question5,
                        userAnswer: null,
                        region: kommuneNavn,
                        regionnr: kommuneNr,
                        enhet: '%',
                        alternativeViewer: 'buttonNumber'
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
                    <label htmlFor="region-input">Hvor bor du?</label>
                    <input type="text" className="form-control" id="region-input" placeholder="Postnr" onChange={this.updateInputValue.bind(this)}></input>
                    <button type="button" className="btn btn-lg btn-primary"  onClick={this.onButtonClicked.bind(this)}>Kjør Quiz</button>
                </div>
            </div>
    }

}


export default withGlobalState(LocationPage);