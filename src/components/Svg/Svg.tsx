import * as React from 'react';
import ReactSVG, { Props as SVGProps } from 'react-inlinesvg';

export const Svg = (props: SVGProps) => {
  const src = `svg/${props.src}.svg`;

  return <ReactSVG {...props} src={src} />;
};
