import React, { useState, useEffect } from 'react';

const Layout = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;