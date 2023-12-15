import { useContext } from "react";
import { UserContext } from "../contexts/User";


const UserCard = ({user}) => {
    const {currUser, setCurrUser} = useContext(UserContext)

    return (
        <section className="user-card">
            <a onClick={() => {setCurrUser(user)}}>
            <p className="user-username">{user.username}</p>
            <div className="user-avatar-cropper">
            <img src={user.avatar_url} alt={`${user.username} avatar`} className="user-avatar-img"></img>
            </div>
            <p className="user-name">{`"${user.name}"`}</p>
            </a>
        </section>
    );
};

export default UserCard;

