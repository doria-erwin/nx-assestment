/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ICognitoUserPoolData } from 'amazon-cognito-identity-js';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
const UserPoolId = process.env.NX_COGNITO_USER_POOL_ID
const ClientId = process.env.NX_COGNITO_CLIENT_ID

const poolData = {
    UserPoolId,
    ClientId,
}

export const UserPool = new CognitoUserPool(poolData as ICognitoUserPoolData)

export const getUser = (email: string) => {
    return new CognitoUser({ Username: email, Pool: UserPool });
}

export const loginUser = async (loginDetails: { email: string, password: string }): Promise<{
    result: any; cognitoUser: CognitoUser;
}> => {
    const cognitoUser = getUser(loginDetails.email);
    const authDetails = new AuthenticationDetails({ Username: loginDetails.email, Password: loginDetails.password });

    return await asyncAuthenticateUser(cognitoUser, authDetails);
}

export const asyncAuthenticateUser = async (cognitoUser: CognitoUser, cognitoAuthenticationDetails: AuthenticationDetails): Promise<{
    result: any; cognitoUser: CognitoUser;
}> => {
    const result = await new Promise(function (resolve, reject) {
        cognitoUser.authenticateUser(cognitoAuthenticationDetails, {
            onSuccess: resolve,
            newPasswordRequired: (data) => resolve({ ...data, 'newPasswordRequired': true }),
            onFailure: reject,
        })
    })

    return { result, cognitoUser }
}

export const completeNewPasswordChallenge = (cognitoUser: CognitoUser, newPassword: string): Promise<any> => {
    return new Promise(function (resolve, reject) {
        cognitoUser.completeNewPasswordChallenge(newPassword, [], {
            onSuccess: resolve,
            onFailure: reject,
        })
    })
}

export const forgotPassword = (email: string): Promise<any> => {
    const cognitoUser = getUser(email);

    return new Promise(function (resolve, reject) {
        cognitoUser.forgotPassword({
            onSuccess: resolve,
            onFailure: reject,
        })
    })
}

export const verifyAndSetPassword = (verificationCode: string, newPassword: string, email: string): Promise<any> => {
    const cognitoUser = getUser(email);

    return new Promise(function (resolve, reject) {
        cognitoUser.confirmPassword(verificationCode, newPassword, {
            onSuccess: resolve,
            onFailure: reject,
        })
    })
}

export const resendConfirmationCode = (email: string) => {
    const cognitoUser = getUser(email);

    return new Promise(function (resolve, reject) {
        cognitoUser.resendConfirmationCode((err, result) => {
            resolve(result);
            reject(err);
        })
    })
}

export const getSession = (cognitoUser: CognitoUser) => {
    // const cognitoUser = UserPool.getCurrentUser();
    // console.log({ cognitoUser });

    if (cognitoUser != null) {
        return new Promise(function (resolve, reject) {
            cognitoUser.getSession((err: any, session: unknown) => {
                reject(err);
                resolve(session)
            })
        })
    }

    return null;
}

export default UserPool
