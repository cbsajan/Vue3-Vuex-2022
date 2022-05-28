import { createStore } from 'vuex';
import AuthModule from './auth';
import CounterModule from './counter';

const store = createStore({
    modules: {
        auth: AuthModule,
        counter: CounterModule
    }
});

export default store;