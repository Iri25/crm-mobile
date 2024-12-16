import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const styles = StyleSheet.create({
    title: {
        top: -60,
        left: 100,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        top: -30,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 24,
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'White',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
})

const PeopleItem = (props) => {
    return (
        <Pressable onPress={() => props.selectPerson(props.people)}>
            <View>
                <Image
                    source={require('../images/background.jpg')}
                    style={styles.image}
                />
                <Icon
                    name={'user'}
                    size={100}
                    style={styles.icon}
                />
                <Text style={styles.title}>{props.people.firstName} {props.people.lastName}</Text>
                <Text style={actions}>{props.people.company}</Text>
            </View>
        </Pressable>
    )
}

export default connect(null, actions)(PeopleItem);
