import styled from '@emotion/native';
import {colors} from '@uoslife/design-system';

type Props = {currentImageLocation: number; carouselDataLength: number};

const OnboardingSlideGuide = ({
  currentImageLocation,
  carouselDataLength,
}: Props) => {
  const switchIsEnabledStatus = (index: number) =>
    currentImageLocation === index;
  return (
    <S.Wrapper>
      {Array.from(Array(carouselDataLength).keys()).map(index => (
        <S.Dot key={index} isEnabled={switchIsEnabledStatus(index)} />
      ))}
    </S.Wrapper>
  );
};

export default OnboardingSlideGuide;

const S = {
  Wrapper: styled.View`
    display: flex;
    flex-direction: row;
    gap: 20px;
  `,
  Dot: styled.View<{isEnabled: boolean}>`
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background-color: ${({isEnabled}) =>
      isEnabled ? colors.primaryBrand : colors.primaryLighterAlt};
  `,
};
