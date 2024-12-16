import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    title: {
        top: -55,
        left: 150,
        fontSize: 24,
    },
    image: {
        height: 100,
        left: 0,
        paddingTop: 5,
    },
    action: {
        top: -25,
        backgroundColor: 'black',
        color: 'white',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    }
});

const CompanyItem = (props) => {
    return (
        <View>
            <Image
                source={require('../images/background.jpg')}
                style={styles.image}
            />
            <Icon
                name={'business'}
                size={100}
                style={styles.icon}
            />
            <Text style={styles.title}> {props.companies.company} </Text>
            {props.companies.names.map((name) => {
                return (
                    <Text key={name._id} style={styles.action}>
                        {name.firstName} {name.lastName}
                    </Text>
                )
            })}
        </View>
    )
}

export default CompanyItem;
