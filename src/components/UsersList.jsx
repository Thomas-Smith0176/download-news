import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";

const UsersList = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res.data.users)
            setIsLoading(false)
        });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
        {users.map((user) => {
            return (
            <UserCard key={user.username} user={user}/>
            )
        })}
        </>
    )
};

export default UsersList;