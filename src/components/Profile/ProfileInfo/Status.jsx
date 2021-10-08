import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode:false
    }

    toggleEditMode = () => {
        this.setState({editMode:!this.state.editMode})
    }

    render() {
        console.log(React.version);
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={()=>{this.toggleEditMode()}}>
                    <span>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div  onBlur={()=>{this.toggleEditMode()}}>
                    <input autoFocus={true} value={this.props.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;