import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode:false
    }

    activateEditMode = () => {
        this.setState({editMode:!this.state.editMode})
    }
    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={()=>{this.activateEditMode()}}>
                    <span>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div  onBlur={()=>{this.activateEditMode()}}>
                    <input autoFocus={true} value={this.props.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;