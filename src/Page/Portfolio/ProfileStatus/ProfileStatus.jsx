import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode() {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatusThunk(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    };

    render() {
        return (
            <div>
                <div>{!this.state.editMode &&
                <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                }
                </div>
                <div>{this.state.editMode === true &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                       value={this.state.status}/>
                }
                </div>
            </div>
        )
    }
}

export default ProfileStatus;
