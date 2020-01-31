import React, { useState, setState, useContext, useRef } from 'react'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';

import '../Styles/collapsible.css'

const Collapsible = ({title, price}) => {
    const [height, setHeight] = useState(0);
    const [isExpanded, setExpanded] = useState(false)
    const innerRef = useRef();

    const handleToggle = e => {
        e.preventDefault();
        setExpanded(!isExpanded)
    }

    const currentHeight = isExpanded ? height : 0;
    
    return( 
        <div className= "parent-collapsible">
        <div className="div-collapsible">
            <ExpansionPanel round expanded={isExpanded} onChange = {handleToggle}>
                <ExpansionPanelSummary 
                aria-controls="panel1a-content" 
                id="panel1a-header">
                    <Typography> {title} </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography> {price} </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
        </div>
    )


}

export default Collapsible;