import {
  ScrollView,
  View,
  PanResponder,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled, {css} from '@emotion/native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import React, {useEffect, useState} from 'react';
import {colors, Icon, Txt} from '@uoslife/design-system';
import Header from '../../../../../components/molecules/common/header/Header';
import ProgressBar from '../ProgressBar';

const GraduateCreditScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const scrollPosition = useSharedValue(0);
  const pullDownPosition = useSharedValue(40);
  const isReadyToRefresh = useSharedValue(false);

  useEffect(() => {
    console.log(isRefreshing);
    setTimeout(() => {
      // if (isRefreshing) return;
      console.log(isRefreshing);
      pullDownPosition.value = withTiming(0);
    }, 3000);
  }, []);

  const onRefresh = (done: () => void) => {
    setIsRefreshing(true);
    console.log('Refreshing...');

    setTimeout(() => {
      setIsRefreshing(false);
      console.log('Refreshed!');
      done();
    }, 3000);
  };

  const onPanRelease = () => {
    pullDownPosition.value = withTiming(isReadyToRefresh.value ? 40 : 0, {
      duration: 180,
    });

    if (isReadyToRefresh.value) {
      isReadyToRefresh.value = false;

      // A function that resets the animation
      const onRefreshComplete = () => {
        pullDownPosition.value = withTiming(0, {duration: 180});
      };

      // trigger the refresh action
      onRefresh(onRefreshComplete);
    }
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollPosition.value = event.contentOffset.y;
    },
  });
  const panResponderRef = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) =>
        scrollPosition.value <= 0 && gestureState.dy >= 0,
      onPanResponderMove: (event, gestureState) => {
        const maxDistance = 40;
        pullDownPosition.value = Math.max(
          Math.min(maxDistance, gestureState.dy),
          0,
        );
        if (
          pullDownPosition.value >= maxDistance / 2 &&
          isReadyToRefresh.value === false
        ) {
          isReadyToRefresh.value = true;
          console.log('Ready to refresh');
        }

        if (
          pullDownPosition.value < maxDistance / 2 &&
          isReadyToRefresh.value === true
        ) {
          isReadyToRefresh.value = false;
          console.log('Will not refresh on release');
        }
      },
      onPanResponderRelease: onPanRelease,
      onPanResponderTerminate: onPanRelease,
    }),
  );
  const pullDownStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pullDownPosition.value,
        },
      ],
    };
  });
  const refreshContainerStyles = useAnimatedStyle(() => {
    return {
      height: pullDownPosition.value,
    };
  });

  const refreshIconStyles = useAnimatedStyle(() => {
    const scale = Math.min(1, Math.max(0, pullDownPosition.value / 40));

    return {
      opacity: isRefreshing
        ? withDelay(100, withTiming(0, {duration: 20}))
        : Math.max(0, pullDownPosition.value) / 50,
      transform: [
        {
          scaleX: isRefreshing ? withTiming(0.25, {duration: 120}) : scale,
        },
        {
          scaleY: scale,
        },
      ],
    };
  }, [isRefreshing]);

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      margin: 0,
      padding: 0,
    },
    refreshContainer: {
      position: 'absolute',
      gap: 6,
      top: -8,
      left: 0,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.grey20,
    },
    refreshIcon: {
      width: 26,
      height: 26,
      borderRadius: 18,
      objectFit: 'contain',
    },
  });

  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Header
        style={{paddingTop: inset.top, marginBottom: 8}}
        label="이수 학점 확인하기"
        onPressBackButton={() => navigation.goBack()}
      />
      <View style={styles.root} pointerEvents={isRefreshing ? 'none' : 'auto'}>
        <Animated.View
          style={[styles.refreshContainer, refreshContainerStyles]}>
          {!isRefreshing ? (
            <Animated.Image
              source={require('../../assets/scroll_refresh.png')}
              style={[styles.refreshIcon, refreshIconStyles]}
            />
          ) : (
            <ActivityIndicator />
            // <Icon
            //   name="checkCircle"
            //   width={26}
            //   height={26}
            //   color="primaryBrand"
            // />
            // <Animated.Image
            //   source={require('../../assets/speech_bubble.png')}
            //   style={[styles.refreshIcon, refreshIconStyles]}
            // />
          )}
          <Txt
            label={
              isRefreshing
                ? '최신 정보를 갖고 오고 있습니다'
                : '아래로 당겨서 리프레쉬'
            }
            color="grey130"
            typograph="labelLarge"
          />
        </Animated.View>
        <Animated.View
          style={[{flex: 1}, pullDownStyles]}
          {...panResponderRef.current.panHandlers}>
          <S.GraduateCreditScreen
            onScroll={scrollHandler}
            scrollEventThrottle={16}>
            <ProgressBar
              type="sub"
              maxNum={130}
              currentCredit={70}
              minGraduateCredit={80}
            />
          </S.GraduateCreditScreen>
        </Animated.View>
      </View>
    </View>
  );
};

export default GraduateCreditScreen;

const S = {
  GraduateCreditScreen: styled(Animated.ScrollView)`
    gap: 24px;
    padding: 52px 16px 120px 16px;
    flex: 1;
  `,
};
