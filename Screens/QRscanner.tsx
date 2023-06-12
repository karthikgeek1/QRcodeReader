import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import React, {useState} from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { request, PERMISSIONS } from 'react-native-permissions';
// import BarcodeScanner from 'react-native-scan-barcode';

type Props = {}

const QRscanner = (props: Props) => {

    const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off)

    const onSuccess = (e: any) => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    return (

        <QRCodeScanner
            onRead={onSuccess}
            flashMode={flashMode}
            reactivate={true}
            topContent={
                <Text style={styles.centerText}>
                    Example QR to scan: Open{' '}
                    <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    your computer and scan the QR code.
                </Text>
            }
            bottomContent={
                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.buttonTouchable1} onPress={()=>setFlashMode(RNCamera.Constants.FlashMode.torch)}>
                        <Text style={styles.buttonText}>Flash ON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTouchable2} onPress={()=>setFlashMode(RNCamera.Constants.FlashMode.off)}>
                        <Text style={styles.buttonText}>Flash OFF</Text>
                    </TouchableOpacity>
                </View>
            }
        />
    )
}

export default QRscanner

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'white'
    },
    buttonTouchable1: {
        padding: 10,
        backgroundColor: 'green',
        height: 50,
        width: 120
    },
    buttonTouchable2: {
        padding: 10,
        backgroundColor: 'red',
        height: 50,
        width: 120
    },
    buttonCont: {
        height: '100%',
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent:'center',
        paddingTop:100,
    }
});