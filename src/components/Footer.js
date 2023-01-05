import React from "react";

import './Footer.css'

function Footer () {

    const today = new Date();
    return (
        <p className="footer">© 1990 - {today.getFullYear()} Imagiflix, Inc.</p>
    )
} 

export default Footer