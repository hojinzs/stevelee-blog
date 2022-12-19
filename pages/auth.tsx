/**
 * Ref: https://docs.amplify.aws/lib/auth/social/q/platform/js/
 */
import {useEffect, useState} from "react";
import {Auth, Hub} from "aws-amplify";
import {CognitoHostedUIIdentityProvider, CognitoUser} from "@aws-amplify/auth";

export default function AuthPage() {

    const [user, setUser] = useState<CognitoUser|null>(null);

    useEffect(() => {

        Hub.listen("auth", (callback) => {
            switch (callback.payload.event) {
                case "signIn":
                    setUser(callback.payload.data);
                    break;
                case "signOut":
                    setUser(null);
                    break;
                case "customOAuthState":
                    break
            }
        })

        Auth.currentAuthenticatedUser()
            .then(crr => setUser(crr))
            .catch(() => null)

    }, [])


    function handleSignIn() {
        Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google
        })
    }

    return (
        <div>
            { !user && (
                <button onClick={handleSignIn}>
                    로그인
                </button>
            )}
            { user && user.getUsername() }
        </div>
    )
}