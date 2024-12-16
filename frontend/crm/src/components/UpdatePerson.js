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
        paddingRight: 20,
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

class UpdatePerson extends Component {
    onUpdatePress() {
        const { firstName, lastName, phone, email, company, project, notes, _id } = this.props;
        
        this.props.saveContact({ firstName, lastName, phone, email, company, project, notes, _id });
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text> Update contact </Text>
                    <TextInput
                        label='First name...'
                        style={styles.fieldStyles}
                        value={this.props.firstName}
                        onChangeText={value => this.props.formUpdate({ prop: 'firstName', value})}
                    />                  
                    <TextInput
                        label='Last name...'
                        style={styles.fieldStyles}
                        value={this.props.lastName}
                        onChangeText={value => this.props.formUpdate({ prop: 'lastName', value})}
                    />
                    <TextInput
                        label='Phone number...'
                        style={styles.fieldStyles}
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({ prop: 'phone', value})}
                    />
                    <TextInput
                        label='Email...'
                        style={styles.fieldStyles}
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({ prop: 'email', value})}
                    />
                    <TextInput
                        label='Company...'
                        style={styles.fieldStyles}
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({ prop: 'company', value})}
                    />
                    <TextInput
                        label='Project...'
                        style={styles.fieldStyles}
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({ prop: 'project', value})}
                    />

                    <TextInput
                        label='Notese...'
                        style={styles.fieldStyles}
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({ prop: 'notes', value})}
                    />
                    <View style={styles.addButton}>
                        <Button title='Add' color='#4db6ac' onPress={this.onUpdatePress.bind(this)}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const maspStateToProps = state => {
    const { firstName, lastName, phone, email, company, project, notes, _id } = state;
    return { firstName, lastName, phone, email, company, project, notes, _id };
}

export default connect(maspStateToProps, actions)(UpdatePerson);
