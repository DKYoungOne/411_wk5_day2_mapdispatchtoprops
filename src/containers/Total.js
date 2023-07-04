import { connect } from "react-redux"
import Total from "../components/Total"

const mapStateToProps = (state) => {
    return {
        total: state.cars
    }
}

export default connect(mapStateToProps)(Total)