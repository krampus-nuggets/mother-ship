import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router } from "react-router-dom";
import "./styles/styles.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
    Auth: {
        mandatorySignIn: false,
        region: config.apiGateway.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
        endpoints: [
            {
                name: "mother-ship",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            }
        ]
    }
});

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql"
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
