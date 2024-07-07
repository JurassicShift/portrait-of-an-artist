import { createSlice } from '@reduxjs/toolkit';


export interface LandingInitialState {
    complete: boolean
}

const initialState: LandingInitialState = {
    complete: false
};

export const landingAnimationSlice = createSlice({
    name: 'landingAnimation',
    initialState,
    reducers: {
        updateAnimationState: (state) => {
            state.complete = !state.complete
        },

    },
});

export const { updateAnimationState } = landingAnimationSlice.actions;

export default landingAnimationSlice.reducer;