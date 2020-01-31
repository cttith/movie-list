import React, { useState } from 'react'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';

import '../Styles/collapsible.css'

const Collapsible = ({ title, price }) => {
    const [isExpanded, setExpanded] = useState(false)

    const handleToggle = e => {
        e.preventDefault();
        setExpanded(!isExpanded)
    }


    return (
        <div className="parent-collapsible">
            <div className="div-collapsible">
                <ExpansionPanel expanded={isExpanded} onChange={handleToggle}>
                    <ExpansionPanelSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography> {title} </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography> ${price} </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    )


}

export default Collapsible;