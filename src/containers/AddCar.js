import AddCar from "../components/AddCar";
import { connect } from "react-redux";
import { addCar } from '../redux/actions';

const mapDispatchToProps = dispatch => {
    return {
        addCar: car => {
            dispatch(addCar(car))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddCar)