import styled from '@emotion/native';
import {Icon, Txt, colors} from '@uoslife/design-system';
import CardLayout from '../cardLayout/CardLayout';

const AnnounceContents = () => {
  return (
    <CardLayout>
      <S.Wrapper>
        <S.AnnounceCategoryWrapper>
          <S.AnnounceCategoryButton>
            <Txt
              label={'일반'}
              color={'primaryBrand'}
              typograph={'bodyMedium'}
            />
          </S.AnnounceCategoryButton>
          <S.AnnounceCategoryButton>
            <Txt label={'학사'} color={'grey190'} typograph={'bodyMedium'} />
          </S.AnnounceCategoryButton>
          <S.AnnounceCategoryButton>
            <Txt label={'채용'} color={'grey190'} typograph={'bodyMedium'} />
          </S.AnnounceCategoryButton>
          <S.AnnounceCategoryButton>
            <Txt label={'창업'} color={'grey190'} typograph={'bodyMedium'} />
          </S.AnnounceCategoryButton>
        </S.AnnounceCategoryWrapper>
        <S.AnnounceTextWrapper>
          <S.AnnounceText>
            <Txt
              label={
                '[대학일자리플러스센터] 2023년 골라듣는 온오프라인 프리패스'
              }
              color={'grey190'}
              typograph={'bodyMedium'}
            />
          </S.AnnounceText>
          <S.AnnounceText>
            <Txt
              label={
                '[대학일자리플러스센터] 2023년 골라듣는 온오프라인 프리패스'
              }
              color={'grey190'}
              typograph={'bodyMedium'}
            />
          </S.AnnounceText>
          <S.AnnounceText>
            <Txt
              label={
                '[대학일자리플러스센터] 2023년 골라듣는 온오프라인 프리패스'
              }
              color={'grey190'}
              typograph={'bodyMedium'}
            />
          </S.AnnounceText>
        </S.AnnounceTextWrapper>
        <S.Border />
        <S.LinkButton>
          <Txt
            label={'UOStory 바로가기'}
            color={'primaryBrand'}
            typograph={'bodySmall'}
          />
          <Icon
            name={'openInNew'}
            width={24}
            height={24}
            color={'primaryBrand'}
          />
        </S.LinkButton>
      </S.Wrapper>
    </CardLayout>
  );
};

export default AnnounceContents;

const S = {
  Wrapper: styled.View`
    padding: 16px 16px 0;
  `,
  AnnounceCategoryWrapper: styled.View`
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  AnnounceCategoryButton: styled.Pressable`
    padding: 9px 24px;
    /* border-bottom-width: 1px; */
    border-color: ${colors.primaryBrand};
    border-style: solid;
  `,
  AnnounceTextWrapper: styled.View`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  AnnounceText: styled.View`
    padding: 8px;
  `,
  Border: styled.View`
    margin: 4px 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.grey40};
  `,
  LinkButton: styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  `,
};
