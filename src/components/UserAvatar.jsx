import { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/api";

const UserAvatar = ({username}) => {
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        getUserByUsername(username).then((res) => {
            setAvatar(res.data.user.avatar_url)
        })
    }, [])

    return (
    <section className="user-avatar-cropper">
        <img src={avatar} className="user-avatar-img"></img>
    </section>
    )
};

export default UserAvatar;