import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PullToRefresh = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 2000);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10} // solo android
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          style={{backgroundColor: 'yellow'}} // solo en ios
          tintColor="white" // solo ios
          title="Refreshing" // solo ios
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

//? https://reactnative.dev/docs/scrollview
