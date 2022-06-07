import axios from "axios";
import {useState, useEffect} from "react";

export default function MessagesTable() {

    const [messages, setMessages] = useState([])

    const deleteMessage = (messageId) => {
        axios.delete(`https://hubbler-bot.herokuapp.com/api/delete/messages/${messageId}`).then(() => {
            console.log('delete')
        })
    }

    useEffect(() => {
        axios.get('https://hubbler-bot.herokuapp.com/api/get/messages').then((response) => {
            setMessages(response.data)
        })
    }, [])

    return (
        <>
            <h1>Сообщения</h1>
            <div className="container overflow-auto">
                <table className="table table-hover">
                    <thead>
                    <tr className="">
                        <th scope="col">ID</th>
                        <th scope="col">telegram_id</th>
                        <th scope="col">chat_ID</th>
                        <th scope="col">message</th>
                        <th scope="col">Accepted</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages.map((value) => {
                        return <tr>
                            <td>{value.id}</td>
                            <td>{value.telegram_id}</td>
                            <td>{value.chat_id}</td>
                            <td>{decodeURI(value.message)}</td>
                            <td>{value.accepted ? 'Принято' : 'Отклонено'}</td>
                            <td>
                                <form onSubmit={() => {deleteMessage(value.id)}}>
                                    <button className="btn btn-dark send_message">Удалить</button>
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