import { IState } from "../reducer";
import { getAllCategoryActionMapper } from '../action-mapper/Category-action-mappers'
import { connect } from "react-redux";
import { ViewAllCategoryComponent } from "./ViewAllCategoryComponent";


const mapStateToProps = (state:IState) => 
{
    return { 
        allCategory:state.allCategory.allCategory, // error
        errorMessage: state.allCategory.errorMessage
    }
}

const mapDispatchToProps = 
{
    getAllCategoryActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllCategoryComponent)