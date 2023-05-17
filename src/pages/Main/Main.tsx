import React, { memo } from 'react';

import { Root } from './styled';

export type MainProps = {};

const Main: React.FC<MainProps> = (props) => {
  return <Root>Xy</Root>;
};

export default memo(Main);
