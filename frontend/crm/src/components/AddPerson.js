import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, TextInput } from '@react-native-material/core';
import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between'
    },
    fieldStyles: {
        height: 70,
        color: '#f47100',
    },
    addButton: {
        marginTop: 20,
    }
})

class AddPerson extends Component {
    onAddPress() {
        const { firstName, lastName, phone, email, company, project, notes } = this.props
        
        this.props.createNewContact({ firstName, lastName, phone, email, company, project, notes })

        this.props.navigation.navigate('People');
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text> Add a new contact </Text>
                    <TextInput
                        label='First name...'
                        style={styles.fieldStyles}
                        value={this.props.firstName}
                        onChangeText={value => this.props.formUpdate({ prop: 'firstName', value })}
                    />
                    <TextInput
                        label='Last name...'
                        style={styles.fieldStyles}
                        value={this.props.lastName}
                        onChangeText={value => this.props.formUpdate({ prop: 'lastName', value })}
                    />
                    <TextInput
                        label='Phone number...'
                        style={styles.fieldStyles}
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({ prop: 'phone', value })}
                    />
                    <TextInput
                        label='Email...'
                        style={styles.fieldStyles}
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({ prop: 'email', value })}
                    />
                    <TextInput
                        label='Company...'
                        style={styles.fieldStyles}
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({ prop: 'company', value })}
                    />
                    <TextInput
                        label='Project...'
                        style={styles.fieldStyles}
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({ prop: 'project', value })}
                    />
                    <TextInput
                        label='Notes...'
                        style={styles.fieldStyles}
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({ prop: 'notes', value })}
                    />
                    <View style={styles.addButton}>
                        <Button title='Add' color='#4db6ac' onPress={this.onAddPress.bind(this)}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const maspStateToProps = state => {
    const { firstName, lastName, phone, email, company, project, notes } = state;
    return { firstName, lastName, phone, email, company, project, notes };
}

export default connect(maspStateToProps, actions)(AddPerson);
