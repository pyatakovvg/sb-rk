
import { configureStore } from '@reduxjs/toolkit';

import { reducer as homeReducer } from '@modules/home';

import { reducer as formReducer } from 'redux-form';


export default configureStore({
  reducer: {
    form: formReducer,
    home: homeReducer,
  },
});
