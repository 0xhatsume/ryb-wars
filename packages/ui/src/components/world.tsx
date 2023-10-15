import React from 'react';

function World() {
    return (
        <div 
        className="
        border border-slate-800
        rounded-t-lg
        bg-white h-full
        px-2
        flex flex-col justify-start items-center
        ">
            <img src="/3kingdoms.jpg" />
            <img className="h-[180px]" src="world-stats.jpg"/>
        </div>
    );
}

export default World;