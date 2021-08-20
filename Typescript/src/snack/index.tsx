import React, { FC, ReactElement, useEffect } from "react";
import "./index.scss";
import { GameControl } from "./typing";

const Snake: FC = (): ReactElement => {
  useEffect(() => {
    new GameControl();
  }, []);
  return (
    <div id='snake-main'>
      {/* 贪吃蛇舞台 */}
      <div id='stage'>
        {/* 设置蛇 */}
        <div id='snake'>
          {/* 蛇的身体部分 */}
          <div></div>
        </div>
        <div id='food'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* 记分牌面板 */}
      <div id='score-panel'>
        <div>
          SCORE: <span id='score'>0</span>
        </div>
        <div id='level'>
          LEVEL: <span id='level'>1</span>
        </div>
      </div>
    </div>
  );
};

export default Snake;
