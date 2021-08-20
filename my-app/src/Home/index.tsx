import React, { FC, ReactElement } from "react";
import { direction } from "../Typing";
import { Button, Input } from "antd";

import "./index.less";

const index: FC = (): ReactElement => {
  console.log(direction.UP);

  return (
    <div className='header'>
      <div>首页</div>
      <Button type='primary'>按钮</Button>
      <Input type='text'></Input>
    </div>
  );
};

export default index;
