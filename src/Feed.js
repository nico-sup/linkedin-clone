import React , {useState, useEffect} from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import InputOptions from './InputOptions'
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase';
import {useSelector} from 'react-redux'
import { selectUser } from './features/userSlice'
import './styleMobile.css'

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]); //initaliser l'etat d'un élément

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))) //update post
        ))
    }, [])    

    // la fonction au dessus initialise la base de donnée,
    //  parcours toutes les données demandé (ici id et data) et
    //  retourne tout les éléments présents dans la base

    const sendPost = (e) => {
        e.preventDefault(); // pour arreter de rafraichir la page onclick
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp() //pour initialiser le moment ou le message a été écrit
        });
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">SEND</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon } title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {posts.map(({id, data: {name, description, message, photoUrl} }) => (
                <Post 
                key={id}
                name = {name}
                description = {description}
                message = {message}
                photoUrl = {photoUrl}
                />
            ))}

            <Post name='Nicolas Jeanne' description='test' message='Hellow olrd' />
        </div>
    )
}

export default Feed
