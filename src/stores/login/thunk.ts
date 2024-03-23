import {
    getLogin,
    getLoggedInUser
} from '../../helpers/backend_helper';

import {
    loginSuccess,
    apiError,
} from './reducer';

export const loginUser = (user: any, history: any) => async (dispatch: any) => {
    try {
        let response = await getLogin({
            email: user.email,
            password: user.password,
        });

        if (response) {
            dispatch(loginSuccess(response));
            history('/dashboard');
        }
        else {
            dispatch(apiError('Login Failed'));
        }
    } catch (error: any) {
        dispatch(apiError(error));
    }
};