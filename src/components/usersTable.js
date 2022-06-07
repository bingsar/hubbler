import {useEffect, useState} from "react";
import axios from "axios";
import './UserTable.css';

export default function UsersTable() {

    const [users, setUsers] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios.get('https://hubbler-bot.herokuapp.com/api/get/users').then((response) => {
            setUsers(response.data)
        })
    }, [])

    const sendMessageToChatId = async (telegramId, chatId, message) => {
        encodeURI(message)
        await axios.post(`https://hubbler-bot.herokuapp.com/api/send/message/${telegramId}/${chatId}/${message}`).then((response) => {
            console.log(response)
        })
    }

    console.log(message)

    const messageText = async (e) => {
        await setMessage(e.target.value)
    }

    return (
        <>
            <h1>Соискатели</h1>
        <div className="container overflow-auto">
            <table className="table table-hover">
                <thead>
                <tr className="">
                    <th scope="col">chat_ID</th>
                    <th scope="col">Telegram username</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">CV</th>
                        <th scope="col">About</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
    {users.map((value) => {
                 return <tr>
                            <td>{value.chat_id}</td>
                            <td>{value.telegram_id}</td>
                            <td>{decodeURI(value.name)}</td>
                            <td>{value.contact}</td>
                            <td>{decodeURI(value.cv)}</td>
                            <td>{decodeURI(value.about)}</td>
                            <td>
                                <form action="" onSubmit={() => {sendMessageToChatId(value.telegram_id, value.chat_id, message)}}>
                                    <textarea name="messageToApplicant" id="messageToApplicant" cols="30" rows="1" onChange={messageText} />
                                    <button className="btn btn-dark send_message">Отправить</button>
                                </form>
                            </td>
                        </tr>
    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}