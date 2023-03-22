import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}){
   
   
   
    const HomeRightBar =()=>{
        return(
            <>
            <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.jpg" alt="gift" />
            <span className="birthdayText">
                <b>Neeraj Yadav</b> and <b>3 other friends </b>have a birthday today
                </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="ad"></img>
        <h4 className="rightbarTitle">Online Friends</h4>
    <ul className="rightbarFriendList">
       {Users.map(u=>(
        <Online key={u.id} user={u} />
       ))}
    
       
    </ul>
    </>
        );
    };
 
    
const ProfileRightBar =()=>{
    return(
       <>
       <h4 className="rightBarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
        </div>

      </div>

      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Dubai</span>
        </div>

      </div>

      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
        </div>

      </div>
      <h4 className="rightBarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
            <img src="assets/profile/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
            <img src="assets/profile/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
            <img src="assets/profile/9.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
            <img src="assets/profile/8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
            <img src="assets/profile/7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
            <img src="assets/profile/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
       </> 
    )
}

    return(
        <div className="rightbar">
<div className="rightbarWrapper">
{profile ? <ProfileRightBar/> : <HomeRightBar/>}


</div>
        </div>
    )
}