import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import CommentIcon from '@material-ui/icons/Comment'
import SharedOutlineIcon from '@material-ui/icons/ShareOutlined'
import SendOutlineIcon from '@material-ui/icons/SendOutlined'

function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpOutlinedIcon} title="like" color="#0a66c2" />
                <InputOptions Icon={CommentIcon} title="comment" color="gray" />
                <InputOptions Icon={SharedOutlineIcon} title="share" color="gray" />
                <InputOptions Icon={SendOutlineIcon} title="share" color="gray" />
            </div>

        </div>
    )
}

export default Post
