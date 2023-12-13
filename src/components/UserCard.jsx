import { useContext } from "react";
import { UserContext } from "../contexts/User";


const UserCard = ({user}) => {
    const {currUser, setCurrUser} = useContext(UserContext)

    return (
        <section>
            {/* <a onClick={() => {setCurrUser(user)}}> */}
            <a onClick={() => {setCurrUser(user)}}>
            <p>{user.username}</p>
            <p>{`"${user.name}"`}</p>
            <div className="user-avatar-cropper">
            <img src={user.avatar_url} alt={`${user.username} avatar`} className="user-avatar-img"></img>
            </div>
            </a>
        </section>
    );
};

export default UserCard;

