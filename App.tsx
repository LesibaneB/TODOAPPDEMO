import React from 'react';

import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: red;
  padding-left: 130px;
`;

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <StyledText>Hello world</StyledText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
