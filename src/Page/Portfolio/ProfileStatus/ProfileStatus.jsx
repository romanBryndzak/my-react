import React from "react";

class ProfileStatus extends React.Component {

    state = {editMode: false};

    activateEditMode() {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
    };

    render() {
        return (
            <div>
                <div>{!this.state.editMode &&
                <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                }
                </div>
                <div>{this.state.editMode === true &&
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                }
                </div>
            </div>
        )
    }
}

export default ProfileStatus;
