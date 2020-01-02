import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter as  Router } from "react-router-dom";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import "./styles/styles.css";
import App from './App';
import config from "./res/configs/config";
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
        <ApolloProvider client={ apolloClient }>
            <Router>
                <App />
            </Router>
        </ApolloProvider>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
