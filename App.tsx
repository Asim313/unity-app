import React, {useRef, useEffect} from 'react';
//@ts-ignore
import UnityView from '@azesmway/react-native-unity';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <UnityView
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 1,
          bottom: 1,
        }}
      />
    </View>
  );
};

export default App;