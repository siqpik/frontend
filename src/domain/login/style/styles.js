import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoText: {
        flexDirection: "row",
        marginVertical: 15,
        fontSize: 50,
        color: '#757575',
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 16,
        justifyContent: 'center',
    },
    signupText: {
        fontSize: 16,
        fontWeight: "500"
    }
})