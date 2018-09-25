import React from 'react';

import {withGlobalState} from 'react-globally'

class ResultsPage extends React.Component {



    render() {
        const results =this.props.globalState.questions;
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
    }


}


export default withGlobalState(ResultsPage);