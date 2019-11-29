import React from 'react';
import {ApolloConsumer} from 'react-apollo';

const Signout = () => (
    <ApolloConsumer>
        {client => {
            console.log(client);
            return (
                <button>Signout</button>
            )
        }}
       
    </ApolloConsumer>
)

export default Signout;