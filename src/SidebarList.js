import React from 'react';
import './Styles/SidebarList.scss';

function SidebarList({ title, Icon }) {
    return (
        <div className="sidebarList">
            {Icon && <Icon className="sidebarIcon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarList
