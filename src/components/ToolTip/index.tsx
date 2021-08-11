import React from 'react';
import { Tip } from './styles';
type ITooltip = { text: string; children: any };

export default function ToolTip({ text, children }: ITooltip) {
  console.log(text);
  return <Tip text={text}>{children}</Tip>;
}
