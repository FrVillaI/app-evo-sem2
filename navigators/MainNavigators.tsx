import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/WelcomeScreen";
import IngresarDatosScreen from "../screen/IngresarDatosScreen";
import VerDatosScreen from "../screen/VerDatosScreen";
import EditarEliminarScreen from "../screen/EditarEliminarScreen";
import ApiListScreen from "../screen/ApiListScreen";


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Agregar D." component={IngresarDatosScreen} />
        <Tab.Screen name="Actualizar Eliminar D." component={EditarEliminarScreen} />
        <Tab.Screen name="Ver D." component={VerDatosScreen} />
        <Tab.Screen name="API" component={ApiListScreen} />
      </Tab.Navigator>
    );
  }

  
  export default function TopTabNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
  }