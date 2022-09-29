import {
  configureStore,
  combineReducers,
  PreloadedState,
  AnyAction,
  ImmutableStateInvariantMiddlewareOptions,
  SerializableStateInvariantMiddlewareOptions
} from '@reduxjs/toolkit'
import { Context, createWrapper, HYDRATE } from 'next-redux-wrapper'

import screenReducer from 'shared/redux/slices/screen'

const RootReducer = combineReducers({
  screen: screenReducer
})

const masterReducer = (
  state: ReturnType<typeof RootReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    return nextState
  } else {
    return RootReducer(state, action)
  }
}

// ThunkOptions not exported in getDefaultMiddleware, so we have a copy here
interface MyThunkOptions<E> {
  extraArgument: E
}

// GetDefaultMiddlewareOptions in getDefaultMiddleware does not allow
// providing type for ThunkOptions, so here is our custom version
// https://redux-toolkit.js.org/api/getDefaultMiddleware#api-reference
interface MyDefaultMiddlewareOptions {
  thunk?: boolean | MyThunkOptions<Context>
  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions
  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions
}

export const store = configureStore({
  reducer: masterReducer as any
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(api.middleware)
})

export function setupStore(
  preloadedState?: PreloadedState<typeof RootReducer>
) {
  return configureStore({
    reducer: RootReducer,
    preloadedState
  })
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const makeStore = (ctx: Context) => {
  return configureStore({
    reducer: masterReducer as any,
    middleware: (gDM) =>
      gDM<MyDefaultMiddlewareOptions>({
        thunk: {
          extraArgument: ctx
        }
      })
    //   .concat(api.middleware)
  })
}

export const wrapper = createWrapper(makeStore)
