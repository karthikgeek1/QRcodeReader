import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

type Props = {
    navigation:any;
}

const EntryScreen = ({navigation}: Props) => {
    return (
        // <View>
            <Onboarding
            onSkip={() => navigation.navigate('QRscanner')}
            onDone={() => navigation.navigate('QRscanner')}            
                pages={[
                    {
                        backgroundColor: 'white',
                        image: <Image
                        style={styles.logo}
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzXvmKAl_DebJN8w1qCpGo2LDeef0r9zNUw&usqp=CAU',
                        }}
                      />,
                        title: 'Welcome to QR code Scanner',
                        subtitle: 'An app to scan QR ',
                    },
                    {
                        backgroundColor: 'white',
                        image: <Image
                        style={styles.logo}
                        source={{
                          uri: 'https://editor.analyticsvidhya.com/uploads/89191cover2.jpg',
                        }}
                      />,
                        title: 'Getting Started',
                        subtitle: 'Place the camera near the QR',
                    },
                    {
                        backgroundColor: 'white',
                        image: <Image
                        style={styles.logo}
                        source={{
                          uri: 'https://thumbs.dreamstime.com/z/scan-qr-code-to-mobile-phone-electronic-digital-technology-barcode-vector-illustration-154580721.jpg',
                        }}
                      />,
                        title: 'Done!',
                        subtitle: 'Get Ready to scan the QR',
                    },
                ]}
            />
        // </View>
    )
}

export default EntryScreen

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 166,
      height: 158,
    },
  });