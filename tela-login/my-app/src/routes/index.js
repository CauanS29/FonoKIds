import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Progess from '../pages/Progress'
import UserData from '../pages/UserData'
import Exercises from '../pages/Exercises'

const stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <stack.Navigator>
            <stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <stack.Screen
                name="Exercises"
                component={Exercises}
                options={{ headerShown: false }}
            />


            <stack.Screen
                name="UserData"
                component={UserData}
                options={{ headerShown: false }}
            />

            <stack.Screen
                name="Progress"
                component={Progess}
                options={{ headerShown: false }}
            />
        </stack.Navigator>
    )
}