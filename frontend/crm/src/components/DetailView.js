import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect}  from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';

const styles = StyleSheet.create({
    title1: { 
        top: -75,
        left: 100,
        fontSize: 24,
    },
    title2: {
        top: -70,
        left: 100,
        fontSize: 24, 
    },
    image: {
        height: 100,
        backgroundColor: 'transparent',
    },
    closeIcon: {
        position: 'absolute',
        top: 10, 
        right: 5,
        color: 'red',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20, 
        paddingTop: 10,
    },
    finalText: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    editIcon: {
        color: '#26a6e4',
    },
    sections: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        width: 100,
    },
    deleteIcon: {
        color: '#e9a69a',
    },
    editDeleteArea: {
        flexDirection: 'row',
        paddingButtom: 10,
        justifyContent: 'space-around',
        alignContent: 'center',
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        marginBottom: 10,
        marginTop: 20,
    },
    actionImage: {
        width: 100,
        height: 100,
    }
});

class DetailView extends Component {
    updateTest() {
        this.props.upfateContact(this.props.person);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require('../images/background.jpg')} style={styles.image}/>
                    <EvilIcon name={'user'} size={100} style={styles.icon}/>
                    <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
                        onPress={() => this.props.noneSelected()}
                    />
                    <Text style={styles.title1}> {this.props.person.firstName} {this.props.person.lastName} </Text>
                    <Text style={styles.title2}> {this.props.person.company} </Text>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'phone'} size={40} style={styles.textIcons}/>
                        <Text style={styles.finalText}> {this.props.person.phone} </Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'email'} size={40} style={styles.textIcons}/>
                        <Text style={styles.finalText}> {this.props.person.email} </Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}/>
                        <Text style={styles.finalText}> {this.props.person.project} </Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}/>
                        <Text style={styles.finalText}> {this.props.person.notes} </Text>
                    </View>
                    <View style={styles.editDeleteArea}>
                        <TouchableOpacity style={styles.sections}
                            onPress={() => { this.updateTest(); }}
                        >
                            <MaterialIcon name={'autorenew'} size={40} style={styles.editIcon}/>
                            <Text style={styles.finalText}> EDIT </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.sections}
                            onPress={() => { this.props.deleteContact(this.props.person._id); }}
                        >
                            <MaterialIcon name={'delete-forever'} size={40} style={styles.editIcon}/>
                            <Text style={styles.finalText}> DELETE </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.actionArea}>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/call.png')} 
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Image
                                source={require('../images/email.png')} 
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require('../images/sms.png')} 
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.actionArea}>
                        <Text> Call </Text>
                        <Text> Email </Text>
                        <Text> SMS </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        person: state.personSelected,
        toUpdate: state.toUpdate,
    }
}
export default connect(mapStateToProps, actions)(DetailView);