import React from 'react';
import './Styles/SidebarList.scss';

function SidebarList({ title, Icon }) {
    return (
        <div className="sidebarList">
            {Icon && <Icon className="sidebarIcon" />}
            {Icon ? <h4 id={title.toString()}>{title}</h4> : <p id={title.toString()}>{title}</p>}
        </div>
    )
}

export default SidebarList
