import { View, TextInput, Button, StyleSheet, Modal, Image} from "react-native"

function input(props) {
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/favicon.png')} />
                <TextInput style={styles.textInput} placeholder='Enter The goal' onChangeText={props.goalInputHandler}
                />
                
                <View style={styles.buttonContainer}>
                    
                    <View style={styles.button}>
                    <Button color={'#f31282'} title="Cancel" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                    <Button color={'#5e0acc'} title='Add Goal' onPress={props.addHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        height: 50,
        color: '#120438',
        padding: 16
    },
    buttonContainer : {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image:{
        width: 100,
        height: 100,
        margin: 20,
    }
})

export default input