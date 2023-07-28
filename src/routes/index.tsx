import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes(){
    const { colors } = useTheme()
    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700]
    const config = {
        screens: {
          History: 'history',
          Profile: 'profile',
        },
      };
      
      const linking = {
        prefixes: [' com.felipescaires.beegym://', 'bee-gym://'],
        config,
      };
    return(
        <Box flex={1} bg={colors.gray[700]}>
        <NavigationContainer theme={theme} linking={linking}>
            <AuthRoutes />
        </NavigationContainer>
        </Box>
    )
}