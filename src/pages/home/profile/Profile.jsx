import "./profile.css";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import Sidebar from "../../../components/sidebar/Sidebar";
// import Topbar from "../../components/topbar/Topbar";
import Topbar from "../../../components/topbar/Topbar";
export default function Profile(){
    return(
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/tree.jpg" alt="tree"></img>
            <img className="profileUserImg" src="assets/profile/3.jpg" alt="tree"></img>
            </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Nikki Joshi</h4>
            <span className="profileInfoDesc">Hello everyone</span>
            
            </div> 
        </div>
        <div className="profileRightBottom">
        <Feed />
        <Rightbar profile/>
        
        </div>
        
      
        </div>
       
        </div>
    </>
    )
}