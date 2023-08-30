import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import Header from '../../../components/header/Header';
import {Txt} from '@uoslife/design-system';
import ArticleList from '../../../components/article/ArticleList';
import styled from '@emotion/native';
import {Article, ArticleCategoryTapState} from '../AnnouncementMainScreen';

const AnnouncementBookmarkBoxScreen = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useState<ArticleCategoryTapState>({
    list: ['일반', '학사', '채용', '창업'],
    selected: '일반',
  });

  useEffect(() => {
    try {
      const DUMMY_DATA: Article[] = new Array();

      // 더미 만들어주는 코드 <- 나중에 제대로 된 API로 교체 예정
      for (let i = 0; i < 15; i++)
        DUMMY_DATA.push({
          bookmarkCnt: i % 5,
          department: `category${i}`,
          title: `titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle${i}`,
          uploadTime: new Date(),
          bookmarkByMe: !!(i % 5) && !!(i % 2),
          id: `id${i}`,
          category:
            i % 4 === 0
              ? '일반'
              : i % 4 === 1
              ? '학사'
              : i % 4 === 2
              ? '채용'
              : '창업',
        });

      // 내가 북마크한 글만
      setArticles(DUMMY_DATA.filter(article => article.bookmarkByMe));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <S.screenWrapper>
      <Header label="북마크함" />
      <S.categoryTapAndContents>
        {articles.length === 0 ? (
          <View style={{paddingTop: 48, display: 'flex', alignItems: 'center'}}>
            <Txt
              color={'black'}
              label={'자신이 북마크한 공지사항을 확인할 수 있어요'}
              typograph={'bodyMedium'}
            />
          </View>
        ) : (
          <ArticleList articles={articles} showCategory />
        )}
      </S.categoryTapAndContents>
    </S.screenWrapper>
  );
};

export default AnnouncementBookmarkBoxScreen;
const S = {
  screenWrapper: styled.ScrollView`
    width: 100%;
    height: 100%;
    display: flex;
  `,
  categoryTapAndContents: styled.View`
    width: 100%;
    display: flex;
    gap: 4px;
  `,
  decriptionContainer: styled.View`
    display: flex;
    flex-direction: row;
  `,
};
