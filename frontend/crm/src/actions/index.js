export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    };
}

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
}

export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value},
    };
}

export const createNewContact = ({ firstName, lastName, phone, email, company, project, notes }) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/contact', {
            method: 'POST',
            body: JSON.stringify({
                'firstName':  firstName,
                'lastName': lastName,
                'phone': phone,
                'email': email,
                'company': company,
                'project': project,
                'notes': notes,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then( () => {
            dispatch({ type: 'NEW_CONTACT' });
        })
        .then( () => {
            dispatch(loadInitialContacts());
        })
        .catch(error => console.log(error));
    };
}

export const updateContact = (person) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: person,
    }
}

export const saveContact = ({ firstName, lastName, phone, email, company, project, notes, _id }) => {
    return (dispatch) => {
        fetch(`hhtp://127.0.0.1:3000/contact/${_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                'firstName':  firstName,
                'lastName': lastName,
                'phone': phone,
                'email': email,
                'company': company,
                'project': project,
                'notes': notes,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then( () => {
            dispatch({ type: 'SAVE_CONTACT' });
        })
        .then( () => {
            dispatch(loadInitialContacts());
        })
        .catch(error => console.log(error));
    };
}

export const deleteContact = (id) => {
    return (dispatch) => {
        fetch(`hhtp://127.0.0.1:3000/contact/${id}`, {
            method: 'DELETE',
        })
        .then( () => {
            dispatch({ type: 'DELETE_CONTACT' });
        })
        .then( () => {
            dispatch(loadInitialContacts());
        })
        .catch(error => console.log(error));
    };
}

export const loadInitialContacts = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/contact')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({ type: 'INITIAL_FETCH', payload: data })
            })
            .catch(error => console.log(error))
    };
}