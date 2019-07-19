import React from 'react';
import ScoreBoard from './ScoreBoard';
import RunsHitsErrors from './RunsHitsErrors';
import BaseRunners from './BaseRunners';

function Header() {
    return (
        <div className="topSection">
            <ScoreBoard />
            <RunsHitsErrors />
            <BaseRunners />
        </div>
    )
}

export default Header;