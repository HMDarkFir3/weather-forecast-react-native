//React
import React from "react";
import { useWindowDimensions } from "react-native";

//React Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

//Page
import Home from "./pages/Home";
import Search from "./pages/Search";

//Component
import CustomDrawer from "./components/CustomDrawer";

const Drawer = createDrawerNavigator();

function Routes() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerType={dimensions.width >= 768 ? "permanent" : "front"}
      drawerContentOptions={{
        activeTintColor: "#000000",
        activeBackgroundColor: "#ffffff",
        inactiveTintColor: "#ffffff",
        inactiveBackgroundColor: "#ffffff10",
        labelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Minha Cidade",
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          title: "Procurar Cidade",
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
