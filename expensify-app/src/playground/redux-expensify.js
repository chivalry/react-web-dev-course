import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'lkjwerb',
        description: 'January Rent',
        note: 'final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};