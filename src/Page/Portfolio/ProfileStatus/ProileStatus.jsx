import React, {useState, useEffect} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(editMode = true)
    };

    const deactivateEditMode = () => {
        setEditMode(editMode = false);
        props.updateStatusThunk(status)
    };

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    };

    useEffect(() => {
            setStatus(props.status);
        }, [props.status]
    );


    return (
        <div>
            <div>{!editMode &&
            <span onClick={activateEditMode}>{props.status}</span>
            }
            </div>
            <div>{editMode &&
            <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode}
                   value={status}/>
            }
            </div>
        </div>
    )
};

export default ProfileStatus;
