import React, {Component} from "react"
import {withRouter} from "react-router-dom"
class Detail extends Component {

    index = "";

    render() {
        console.log(this.props);
        console.log(this.props.match.params.index);
        console.log(this.props.location.search);
        // this.index = this.props.match.params.index;

        return (
            <div>detail</div>
        )
    }

}

export default withRouter(Detail)
