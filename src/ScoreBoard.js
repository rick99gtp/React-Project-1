import React from 'react';

function ScoreBoard() {
    return (
        <div className="scoreboard">
            <div className="grid-container-scoreboard">
                {/* 1st row */}
                <div className="grid-item grid-item-teamname"></div>
                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
                {/* 2nd row */}
                <div className="grid-item grid-item-teamname">VISITORS</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                {/* 3rd row */}
                <div className="grid-item grid-item-teamname">HOME</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
                <div className="grid-item">0</div>
            </div>
        </div>
    );
}

export default ScoreBoard;