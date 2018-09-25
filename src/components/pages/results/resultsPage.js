import React from 'react';

import {withGlobalState} from 'react-globally'

class ResultsPage extends React.Component {



    render() {
        return <div>
            <span>Her Skal resultatene vises</span>
        </div>
    }


}


export default withGlobalState(ResultsPage);