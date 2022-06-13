import { useState } from "react";
import "./UserDropdown.css";

const UserDropdown = ({ user }) => {
    //Render phase
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="userDropdown__container">
            <div 
                className="userDropdown__anchor" 
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <img 
                    src={user.avatar} 
                    alt="userProfilePicture" 
                    className="userAvatar__container"
                />
            </div>
            { showDropdown && (
                <div className="userDropdown__dropdown">
                    <div className="userDropdown__userFullName">{user.fullName}</div>
                    <div className="userDropdown__dropdown__item">Update profile</div>
                    <div className="userDropdown__dropdown__item">My boards</div>
                    <div className="userDropdown__dropdown__item">My pins</div>
                    <div className="userDropdown__dropdown__item">Log out</div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;