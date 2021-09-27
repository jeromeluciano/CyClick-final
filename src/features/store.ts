import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth-slice";
import { navigationSlice } from "./navigation/navigation-slice";
import { trackSlice } from "./tracks/track-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    track: trackSlice.reducer,
    navigation: navigationSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch