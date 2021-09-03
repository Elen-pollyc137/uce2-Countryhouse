import React from 'react';
import { Tip } from './styles';
type ITooltip = { text: string; children: any };

export default function ToolTip({ text, children }: ITooltip) {
  return <Tip name={text}>{children}</Tip>;
}
