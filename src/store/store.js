import Vue from 'vue';

const store = {
    token: null,
    user: null,
    employees: []
};

const state = Vue.observable(store);

const actions = {
    setToken(token) {
        state.token = token;
    },
    setUser(user) {
        state.user = user;
    },
    resetAuth() {
        state.token = null;
        state.user = null;
    },
    setEmployees(employees) {
        state.employees = employees;
    }
};

export {
    state,
    actions
};