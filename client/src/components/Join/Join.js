import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Join.css'


const Join = ()=> {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h2 className="heading">Join</h2>
                <div><input className="joinInput" type="text"  placeholder="Name" onChange={(event) => setName(event.target.value)} /></div>
                <div><input className="joinInput mt-20" type="text"  placeholder="Room" onChange={(event) => setRoom(event.target.value)} /></div>

                <Link to={`/chat?name=${name}&room=${room}`} onClick={event => (!name || !room ) ? event.preventDefault() : null}>
                    <button className="button mt-20" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join