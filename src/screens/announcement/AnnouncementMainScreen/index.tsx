import React, {useState, useEffect, Dispatch} from 'react';
import Header from '../../../components/header/Header';
import styled from '@emotion/native';
import ArticleList from '../../../components/article/ArticleList';
import CategoryTab from '../../../components/category-tab/CategoryTab';

export type ArticleCategoryName = '일반' | '학사' | '채용' | '창업';
export type ArticleCategoryTapState = {
  list: ArticleCategoryName[];
  selected: ArticleCategoryName;
};
export type Article = {
  bookmarkCnt: number;
  bookmarkByMe: boolean;
  title: string;
  category: ArticleCategoryName;
  body?: string;
  department: string; // XX과
  uploadTime: Date;
  id: string;
  attachments?: string[]; // 첨부파일
};

const AnnouncementMainScreen = () => {
  // 나중에 페이지네이션 적용해야하나?? 일단은 1차원배열로 둠
  const [articles, setArticles] = useState<Article[]>([]);
  const [articleCategoryTapProps, setArticleCategoryTapProps] =
    useState<ArticleCategoryTapState>({
      list: ['일반', '학사', '채용', '창업'],
      selected: '일반',
    });

  const selectCategory = (categoryName: string) => {
    setArticleCategoryTapProps({
      ...articleCategoryTapProps,
      selected: categoryName as ArticleCategoryName,
    });
  };

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

      // 선택한 메뉴에 해당되는 글만
      setArticles(
        DUMMY_DATA.filter(
          article => article.category === articleCategoryTapProps.selected,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }, [articleCategoryTapProps]);

  return (
    <S.screenWrapper>
      {/* 헤더 완성시 검색, 북마크, 알림 아이콘 넣기 */}
      <Header label="공지사항" />
      <S.categoryTapAndContents>
        <CategoryTab
          categoryTabProps={articleCategoryTapProps}
          selectCategory={selectCategory}
        />
        <ArticleList articles={articles} />
      </S.categoryTapAndContents>
    </S.screenWrapper>
  );
};

export default AnnouncementMainScreen;

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
};
