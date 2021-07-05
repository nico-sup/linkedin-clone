import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info'

function Widget() {
    return (
        <div className="widget">
            <div className="widget__header">
                <h2>Linkedin news</h2>
                <InfoIcon />
            </div>
        </div>
    )
}

export default Widget
