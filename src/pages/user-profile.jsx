import { useParams } from "react-router-dom"
import UserService from "../utils/tweetsData";
import Header from "../components/header";
import Avatar from "../components/avatar";

export default function UserProfile() {
    const data = UserService.getUsers();
    const useParam = useParams();
    const {tweetTitle} = useParam;
    const user = data.find((user) => user.tweetTitle === tweetTitle);
    return (
        <>
            <div className="timeline">
            <Header />
            {/* <Avatar srcData={user.tweetTitle}/> */}
            <img src={user.tweetAvatar} alt="" />
            </div>
        </>
    )
}