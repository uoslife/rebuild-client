import styled from '@emotion/native';
import {Txt} from '@uoslife/design-system';
import React from 'react';

type MianTitleProp = {
  mainTitle: string;
};

const MainTitle = ({mainTitle}: MianTitleProp) => {
  return (
    <TitleContainer>
      <Txt label={mainTitle} color="grey190" typograph="headlineMedium" />
    </TitleContainer>
  );
};

const TitleContainer = styled.View`
  padding: 20px 0px 28px 0px;
  align-items: center;
`;

export default MainTitle;
