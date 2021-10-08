import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        status:this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode:true})

    }
    deactivateEditMode = () => {
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={()=>{this.activateEditMode()}}>
                    <span>{this.props.status|| "-----"}</span>
                </div>}
                {this.state.editMode &&
                <div  onBlur={()=>{this.deactivateEditMode()}}>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;