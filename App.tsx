import React, {useRef, useEffect, useState} from 'react';
//@ts-ignore
import UnityView from '@azesmway/react-native-unity';
import {Button, View} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <View style={{flex: 1}}>
        {show && (
          <UnityView
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              top: 1,
              bottom: 1,
            }}
          />
        )}
      </View>
      <Button
        title={show ? 'Close Unity' : 'Launch Unity'}
        onPress={() => setShow(!show)}
      />
    </>
  );
};

export default App;
