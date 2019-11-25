import { state, actions } from './store';
import { toCookie, toLocal } from './storages';

toCookie(state, {
    attrs: ['token']
});

// toLocal(state, {
//     attrs: ['token']
// });

export {
    state,
    actions
};