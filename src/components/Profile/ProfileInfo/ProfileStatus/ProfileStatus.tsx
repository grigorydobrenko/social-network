import React from 'react';


type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        isEdit: false
    }

    toggleMode = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    render() {
        return (
            <div>
                {!this.state.isEdit ?

                    <div onDoubleClick={this.toggleMode}><span>{this.props.status}</span></div> :
                    <input onBlur={this.toggleMode} autoFocus value={this.props.status}/>}
            </div>
        )
    }
}

export default ProfileStatus;
