import { connect } from "react-redux";
import Main from "./Main";

function mapStateToProps(state) {
    return {
        secondsValue: state.seconds
    }
}

var countAction = { type: "count" };

function mapDispatchToProps(dispatch) {
    return {
        countSeconds: function() {
            return dispatch(countAction);
        }
    }
}

var connectedComponent = connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Main);

export default connectedComponent;