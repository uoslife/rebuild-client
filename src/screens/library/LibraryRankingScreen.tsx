import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Header from '../../components/molecules/common/header/Header';
import TabView from '../../components/molecules/common/tab_view/TabView';
import LibraryRanking from '../../components/molecules/screens/library/ranking/LibraryRanking';
import {LibraryRankingTabsEnum} from '../../configs/utility/libraryTabs';

const LibraryRankingScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [index, setIndex] = useState(0);
  return (
    <>
      <Header
        label="도서관 순위"
        onPressBackButton={handleGoBack}
        style={{
          paddingTop: insets.top,
        }}
      />
      <TabView index={index} setIndex={setIndex}>
        <TabView.Screen
          tabKey="DAY"
          tabTitle={LibraryRankingTabsEnum.DAY}
          component={<LibraryRanking />}
        />
        <TabView.Screen
          tabKey="WEEK"
          tabTitle={LibraryRankingTabsEnum.WEEK}
          component={<LibraryRanking />}
        />
      </TabView>
    </>
  );
};

export default LibraryRankingScreen;
