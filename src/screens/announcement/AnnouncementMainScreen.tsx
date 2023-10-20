import {useState, useEffect, useRef, useCallback, ComponentProps} from 'react';
import Header from '../../components/header/Header';
import styled from '@emotion/native';
import ArticleList from '../../components/molecules/announcement/article-list/ArticleList';
import CategoryTab from '../../components/molecules/announcement/category-tab/CategoryTab';
import {Icon, IconsNameType} from '@uoslife/design-system';
import {AnnouncementNavigationProps} from '../../navigators/AnnouncementStackNavigator';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackHandler, Keyboard, Text} from 'react-native';
import SearchInput from '../../components/forms/searchInput/SearchInput';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import SearchWordEnteringView from '../../components/molecules/announcement/search/SearchWordEnteringView';
import {useAtomValue} from 'jotai';
import AnnouncementAPI from '../../api/services/util/announcement/announcementAPI';
import {
  AnnouncementCategoryStatusType,
  categoryStatusAtom,
} from '../../atoms/announcement';
import {AnnouncementOriginNameType} from '../../api/services/util/announcement/announcementAPI.type';
import {ArticleListType} from '../../types/announcement.type';
import useModal from '../../hooks/useModal';
import AlertSettingOverlay from '../../components/molecules/announcement/modalContents/AlertSettingOverlay';
import Spinner from '../../components/spinner/Spinner';

const ELEMENTS_PER_PAGE = 10;

const getOriginFromCategoryState = (
  categoryState: AnnouncementCategoryStatusType,
) => {
  const selectedState = categoryState.find(item => item.isSelected === true);
  return selectedState!.origin;
};

// TODO: 지저분한 Search 관련 코드와 컴포넌트 구조 정리
const AnnouncementMainScreen = () => {
  const insets = useSafeAreaInsets();
  const [isSearchWordEntering, setSearchWordEntering] =
    useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');
  const [isPending, setIsPending] = useState(false);
  const navigation = useNavigation<AnnouncementNavigationProps>();
  const inputRef = useRef<TextInput>(null);
  const listRef = useRef<FlatList>(null);

  const [articleListObject, setArticleListObject] = useState<{
    [key in AnnouncementOriginNameType]: ArticleListType;
  }>({
    FA1: [],
    FA2: [],
    FA34: [],
    FA35: [],
  });

  const [articlePageObject, setArticlePageObject] = useState<{
    [key in AnnouncementOriginNameType]: number;
  }>({
    FA1: 0,
    FA2: 0,
    FA34: 0,
    FA35: 0,
  });

  const categoryStatus = useAtomValue(categoryStatusAtom);
  const currentOrigin = getOriginFromCategoryState(categoryStatus);
  const currentArticles = articleListObject[currentOrigin];

  useEffect(() => {
    listRef.current?.scrollToOffset({offset: 0});
  }, [currentOrigin, listRef]);

  const loadNewArticlesByOrigin = async (
    origin: AnnouncementOriginNameType,
  ) => {
    setIsPending(true);
    try {
      const params = {
        origin,
        page: articlePageObject[origin],
        size: ELEMENTS_PER_PAGE,
      };
      const res = await AnnouncementAPI.getAnnouncements(params);

      const loadedArticles = res.content;

      setArticleListObject(prev => ({
        ...prev,
        [origin]: [...prev[origin], ...loadedArticles],
      }));
      setArticlePageObject(prev => ({
        ...prev,
        [origin]: prev[origin] + 1,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  const icons: {iconName: IconsNameType; onPress: () => void}[] = [
    {
      iconName: 'search',
      onPress: () => {
        setSearchWordEntering(true);
      },
    },
    {
      iconName: 'bookmark',
      onPress: () => {
        navigation.navigate('AnnouncementBookmark');
      },
    },
    {
      iconName: 'notification',
      onPress: () => openBottomSheet(),
    },
  ];

  const navigateToNewSearchScreen = (searchWord: string) => {
    navigation.push('AnnouncementSearch', {
      initialSearchWord: searchWord,
    });
    setTimeout(() => {
      setSearchWordEntering(false);
      setSearchWord('');
    }, 300);
  };

  const searchInputProps: ComponentProps<typeof SearchInput> = {
    inputRef,
    placeholder: '검색어를 입력해주세요.',
    onFocus: () => {
      setSearchWordEntering(true);
      inputRef.current?.focus();
    },
    onChangeText: text => {
      setSearchWord(text);
    },
    onSubmitEditing: () => {
      navigateToNewSearchScreen(searchWord);
    },
    onPressClear: () => {
      setSearchWord('');
      setSearchWordEntering(true);
      inputRef.current?.focus();
    },
    value: searchWord,
  };

  const onHeaderBackPress = () => {
    if (isSearchWordEntering) {
      setSearchWordEntering(false);
      inputRef.current?.blur();
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const keyboardDidHideListener = () => {
      inputRef.current?.blur();
    };
    Keyboard.addListener('keyboardDidHide', keyboardDidHideListener);

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  // 안드로이드에서 뒤로가기 버튼을 눌렀을 때의 동작 지정
  // REF: https://reactnavigation.org/docs/custom-android-back-button-handling/
  useFocusEffect(
    useCallback(() => {
      const onAndroidBackPress = () => {
        onHeaderBackPress();

        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onAndroidBackPress,
      );

      return () => subscription.remove();
    }, [onHeaderBackPress]),
  );

  const articleListReachEndHandler = () => {
    loadNewArticlesByOrigin(currentOrigin);
  };

  const [openBottomSheet, closeBottomSheet, BottomSheet] =
    useModal('BOTTOM_SHEET');

  const isInitiallyPending = isPending && currentArticles.length === 0;

  return (
    <>
      <S.ScreenContainer style={{paddingTop: insets.top}}>
        {isSearchWordEntering ? (
          <>
            <Header onPressBackButton={onHeaderBackPress}>
              <SearchInput {...searchInputProps} />
            </Header>
            <SearchWordEnteringView
              navigateToNewSearchScreen={navigateToNewSearchScreen}
            />
          </>
        ) : (
          <>
            <Header label={'공지사항'} onPressBackButton={onHeaderBackPress}>
              <S.HeaderIcons>
                {icons.map((item, i) => (
                  <S.IconWrapper key={i} onPress={item.onPress}>
                    <Icon
                      name={item.iconName}
                      color={'grey150'}
                      height={24}
                      width={24}
                    />
                  </S.IconWrapper>
                ))}
              </S.HeaderIcons>
            </Header>
            <S.CategoryTabAndContents>
              <CategoryTab />
              {isInitiallyPending ? (
                <Spinner />
              ) : (
                <ArticleList
                  ListFooterComponent={isPending ? <Spinner /> : <></>}
                  ref={listRef}
                  showCategoryName={false}
                  articles={currentArticles}
                  onEndReached={articleListReachEndHandler}
                />
              )}
            </S.CategoryTabAndContents>
          </>
        )}
      </S.ScreenContainer>
      <BottomSheet>
        <AlertSettingOverlay />
      </BottomSheet>
    </>
  );
};

export default AnnouncementMainScreen;

const S = {
  ScreenContainer: styled.View`
    width: 100%;
    height: 100%;
  `,
  CategoryTabAndContents: styled.View`
    width: 100%;
    display: flex;
    gap: 4px;

    flex: 1;
  `,
  HeaderIcons: styled.View`
    // 헤더에서 backArrow, Label 외 영역 전부 사용
    flex: 1;

    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  `,
  IconWrapper: styled.Pressable`
    padding: 4px;
  `,
};
