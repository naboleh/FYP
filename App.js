
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './src/pages/LandingPage';
import Page1E from './src/pages/Page1E';
import Page2E from './src/pages/Page2E';
import Page3E from './src/pages/Page3E';
import Page4E from './src/pages/Page4E';
import Page5E from './src/pages/Page5E';
import Page6E from './src/pages/Page6E';
import Page7E from './src/pages/Page7E';
import Page8E from './src/pages/Page8E';
import Page9E from './src/pages/Page9E';
import Page10E from './src/pages/Page10E';
import Page11E from './src/pages/Page11E';
import Page12E from './src/pages/Page12E';
import Page13E from './src/pages/Page13E';
import Page14E from './src/pages/Page14E';
import Page1M from './src/pages/Page1M';
import Page2M from './src/pages/Page2M';
import Page3M from './src/pages/Page3M';
import Page4M from './src/pages/Page4M';
import Page5M from './src/pages/Page5M';
import Page6M from './src/pages/Page6M';
import Page7M from './src/pages/Page7M';
import Page8M from './src/pages/Page8M';
import Page9M from './src/pages/Page9M';
import Page10M from './src/pages/Page10M';
import Page11M from './src/pages/Page11M';
import Page12M from './src/pages/Page12M';
import Page13M from './src/pages/Page13M';
import Page14M from './src/pages/Page14M';
import EndPageE from './src/pages/EndPageE';
import EndPageM from './src/pages/EndPageM';
import QuizE from './src/pages/QuizE';
import QuizM from './src/pages/QuizM';
 

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="Page1E" component={Page1E} options={{headerShown: false}}/>
        <Stack.Screen name="Page2E" component={Page2E} options={{headerShown: false}}/>
        <Stack.Screen name="Page3E" component={Page3E} options={{headerShown: false}}/>
        <Stack.Screen name="Page4E" component={Page4E} options={{headerShown: false}}/>
        <Stack.Screen name="Page5E" component={Page5E} options={{headerShown: false}}/>
        <Stack.Screen name="Page6E" component={Page6E} options={{headerShown: false}}/>
        <Stack.Screen name="Page7E" component={Page7E} options={{headerShown: false}}/>
        <Stack.Screen name="Page8E" component={Page8E} options={{headerShown: false}}/>
        <Stack.Screen name="Page9E" component={Page9E} options={{headerShown: false}}/>
        <Stack.Screen name="Page10E" component={Page10E} options={{headerShown: false}}/>
        <Stack.Screen name="Page11E" component={Page11E} options={{headerShown: false}}/>
        <Stack.Screen name="Page12E" component={Page12E} options={{headerShown: false}}/>
        <Stack.Screen name="Page13E" component={Page13E} options={{headerShown: false}}/>
        <Stack.Screen name="Page14E" component={Page14E} options={{headerShown: false}}/>
        <Stack.Screen name="Page1M" component={Page1M} options={{headerShown: false}}/>
        <Stack.Screen name="Page2M" component={Page2M} options={{headerShown: false}}/>
        <Stack.Screen name="Page3M" component={Page3M} options={{headerShown: false}}/>
        <Stack.Screen name="Page4M" component={Page4M} options={{headerShown: false}}/>
        <Stack.Screen name="Page5M" component={Page5M} options={{headerShown: false}}/>
        <Stack.Screen name="Page6M" component={Page6M} options={{headerShown: false}}/>
        <Stack.Screen name="Page7M" component={Page7M} options={{headerShown: false}}/>
        <Stack.Screen name="Page8M" component={Page8M} options={{headerShown: false}}/>
        <Stack.Screen name="Page9M" component={Page9M} options={{headerShown: false}}/>
        <Stack.Screen name="Page10M" component={Page10M} options={{headerShown: false}}/>
        <Stack.Screen name="Page11M" component={Page11M} options={{headerShown: false}}/>
        <Stack.Screen name="Page12M" component={Page12M} options={{headerShown: false}}/>
        <Stack.Screen name="Page13M" component={Page13M} options={{headerShown: false}}/>
        <Stack.Screen name="Page14M" component={Page14M} options={{headerShown: false}}/>
        <Stack.Screen name="EndPageE" component={EndPageE} options={{headerShown: false}}/>
        <Stack.Screen name="EndPageM" component={EndPageM} options={{headerShown: false}}/>
        <Stack.Screen name="QuizE" component={QuizE} options={{headerShown: false}}/>
        <Stack.Screen name="QuizM" component={QuizM} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;