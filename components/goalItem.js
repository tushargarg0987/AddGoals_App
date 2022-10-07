import { StyleSheet, Text, View , Pressable} from "react-native";

const goalItem = (props) => {
    return(
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{color: 'black'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={{color: 'white'}}>{props.data.item.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    pressedItem:{
        opacity: 0.5
    }
})

export default goalItem;