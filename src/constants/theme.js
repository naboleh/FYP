import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#374f61",
    secondary: '#6a99bd',
    accent: '#6a99bd',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#374f61"
}


export const SIZES = {
    base: 10,
    width,
    height
}