import {useEffect, useState} from "react";
import axios from "axios";

export default function UsersTable() {

    const [user, setUser] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/api/get/users').then((response) => {
            setUser(response.data)
        })
    }, [])

    return (
        <div>
            {user.map((value) => {
                return <table>
                    <tr>
                        <td>chat_ID</td>
                        <td>Telegram username</td>
                        <td>Name</td>
                        <td>Contact</td>
                        <td>CV</td>
                        <td>About</td>
                    </tr>
                    <tr>
                        <td>{value.chat_id}</td>
                        <td>{value.telegram_id}</td>
                        <td>{value.name}</td>
                        <td>{value.contact}</td>
                        <td>{value.cv}</td>
                        <td>{value.about}</td>
                    </tr>
                </table>
            })}
        </div>
    )
}