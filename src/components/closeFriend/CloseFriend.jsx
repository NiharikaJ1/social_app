import "./closeFriend.css";

export default function CloseFriend({user}){
return(
    <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={user.profilePicture} alt="girl" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>

)

}