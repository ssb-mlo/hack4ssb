import React from 'react';


class LocationPage extends React.Component {


    onButtonClicked() {
        this.props.history.push("/questions")
    }

    render() {
        return <div>
            <span>Placeholder for finn posisjon</span>
            <button onClick={this.onButtonClicked.bind(this)}>gå videre</button>
        </div>
    }



}



export default LocationPage;