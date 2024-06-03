import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {RootNavigationProps} from '../../../navigators/types/rootStack';
import Header from '../../../components/molecules/common/header/Header';
import {Txt, Icon, colors} from '@uoslife/design-system';
import {View, StyleSheet, Linking} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from '@emotion/native';
import usePullToRefresh from '../../../hooks/usePullToRefresh';
import useModal from '../../../hooks/useModal';
import {restaurantListTop} from './dummy';
import RankingContainer from './components/RangkingContainer';
import RestaurantListContainer from './components/RestaurantListContainer';

export type RestaurantItemType = {
  name: string;
  location: string;
  restaurantType: string;
  like: boolean;
  likesCount: number;
  mapLink: string;
};

const RestaurantScreen = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<RootNavigationProps>();
  const [bottomSheetItem, setBottomSheetItem] =
    useState<RestaurantItemType | null>();
  const [openBottomSheet, closeBottomSheet, BottomSheet] =
    useModal('BOTTOM_SHEET');

  const handleClickBottomSheetButton = (item: RestaurantItemType) => {
    Linking.openURL(item.mapLink).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <View>
      <Header
        style={{paddingTop: inset.top, marginBottom: 8}}
        label="맛집 리스트"
        onPressBackButton={() => navigation.goBack()}
      />
      <View
        style={{
          marginTop: 16,
          marginBottom: 16,
          marginLeft: 20,
          marginRight: 20,
          gap: 40,
        }}>
        <RankingContainer
          setBottomSheetItem={setBottomSheetItem}
          openBottomSheet={openBottomSheet}
        />
        <RestaurantListContainer
          setBottomSheetItem={setBottomSheetItem}
          openBottomSheet={openBottomSheet}
        />
      </View>
      <BottomSheet>
        <View style={{padding: 16, paddingBottom: inset.bottom}}>
          <S.bottomSheetTxtWrapper>
            <Txt
              label={bottomSheetItem ? bottomSheetItem?.name : ''}
              color="grey190"
              typograph="titleMedium"
            />
          </S.bottomSheetTxtWrapper>
          <View style={styles.lineStyle} />
          <S.BottomSheetButton
            onPress={() =>
              bottomSheetItem && handleClickBottomSheetButton(bottomSheetItem)
            }>
            <Txt label="카카오맵" color="grey190" typograph="bodyLarge" />
            <Icon name="arrow_down" height={30} width={30} color={'grey190'} />
          </S.BottomSheetButton>
          <S.BottomSheetButton
            onPress={() =>
              bottomSheetItem && handleClickBottomSheetButton(bottomSheetItem)
            }>
            <Txt label="네이버 지도" color="grey190" typograph="bodyLarge" />
            <Icon name="arrow_down" height={30} width={30} color={'grey190'} />
          </S.BottomSheetButton>
        </View>
      </BottomSheet>
    </View>
  );
};

const S = {
  BottomSheetButton: styled.Pressable`
    padding: 8px;
    height: 50px;
    justify-content: space-between;
    flex-direction: row;
  `,
  bottomSheetTxtWrapper: styled.Pressable`
    padding: 8px;
    height: 50px;
  `,
};
const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 1,
    borderColor: colors.grey20,
    margin: 8,
  },
});
export default RestaurantScreen;
