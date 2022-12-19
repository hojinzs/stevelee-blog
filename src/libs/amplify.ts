import {Amplify} from "aws-amplify";
import awsConfig from "../aws-exports"
export function amplifyConfig() {
    if(typeof window !== 'undefined') {
        const isLocalhost = Boolean(
            window.location.hostname === "localhost" ||
            // [::1] is the IPv6 localhost address.
            window.location.hostname === "[::1]" ||
            // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );

        // const [
        //     productionRedirectSignIn,
        //     localRedirectSignIn
        // ] = awsConfig.oauth.redirectSignIn.split(",");
        //
        // const [
        //     productionRedirectSignOut,
        //     localRedirectSignOut
        // ] = awsConfig.oauth.redirectSignOut.split(",");

        const updatedAwsConfig = {
            ...awsConfig,
            oauth: {
                ...awsConfig.oauth,
                redirectSignIn: isLocalhost? `http://${document.location.host}` : `https://${document.location.host}`,
                redirectSignOut: isLocalhost? `http://${document.location.host}` : `https://${document.location.host}`,
            }
        }

        Amplify.configure(updatedAwsConfig)
    }
}