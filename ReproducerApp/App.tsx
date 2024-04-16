import React, {useLayoutEffect, useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';

function SpecialChild({setBgColor}) {
  useLayoutEffect(() => {
    setBgColor('blue');
  });
  return <View style={{width: 5, height: 5, backgroundColor: 'green'}} />;
}

function ALotOfViews({howMany}) {
  const views = [];
  for (let i = 0; i < howMany; i++) {
    views.push(
      <View key={i} style={{width: 5, height: 5, backgroundColor: 'green'}} />,
    );
  }
  return views;
}

function Foo() {
  const [bgColor, setBgColor] = React.useState('red');

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: bgColor,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
      }}>
      <SpecialChild setBgColor={setBgColor} />
      <ALotOfViews howMany={1000} />
    </View>
  );
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView>
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show && <Foo />}
    </SafeAreaView>
  );
}

export default App;
