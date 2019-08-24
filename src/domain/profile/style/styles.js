import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    gridView: {
        borderWidth: 2,
        borderColor: 'red',
        flex: 1
    },
    picStyle: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    }
});
