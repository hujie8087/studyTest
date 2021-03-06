import { createFromIconfontCN } from "@ant-design/icons";
import * as React from 'react';
const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2467607_sf5ou36jx9q.js", // ε¨ iconfont.cn δΈηζ
});

interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  type: string
}
export default function Icon({ type, ...itemProps }: IconProps): React.ReactElement | null {
  if (!type) return null;
  return <MyIcon type={type} {...itemProps} />;
}
