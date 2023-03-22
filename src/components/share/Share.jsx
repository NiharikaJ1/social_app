import { EmojiEmotions, PermMedia,Label,Room } from "@mui/icons-material";
import "./share.css";

export default function Share(){
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/profile/3.jpg" alt="boy"></img>
                <input
                placeholder="what's on your mind nikki?"
                className="shareInput"
                />
                </div>
                <hr className="shareHr"/>
                
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shreIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>

                    <div className="shareOption">
                    <Label htmlColor="blue" className="shreIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>

                    <div className="shareOption">
                    <Room htmlColor="green" className="shreIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>

                    <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shreIcon"/>
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>

<button className="shareButton">Share </button>

            </div>
            </div>

        </div>
    )
}