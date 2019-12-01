import React, {Fragment} from 'react';

import { Query } from 'react-apollo';
import {Redirect} from 'react-router-dom';
import {GET_CURRENT_USER} from '../queries';

const withAuth = conditionFunc => Component =>
props => (
    <Query>
    {({data, loading}) => {
        if(loading) return null;
        return conditionFunc(data) ? <Component {...props} /> : <Redirect to="/"/>
    }}
    </Query>
)

export default withAuth;