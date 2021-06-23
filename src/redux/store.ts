import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from './counter';
import authReducer from './auth';
import pokemonReducer from './pokemon';
import { authApi } from './auth/authApi';
import { pokemonApi } from './pokemon/pokemonApi';

const middlewares = [authApi.middleware, pokemonApi.middleware];

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    pokemon: pokemonReducer,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
