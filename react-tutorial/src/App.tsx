import { Route, Routes } from 'react-router-dom';
import Home from './Todo/Home';
import Create from './Todo/Create';
import View from './Todo/View';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



Amplify.configure({
  Auth: {

      // REQUIRED - Amazon Cognito Region
      region: 'region',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'user-pool-id',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: 'client-id',

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,

  }
});


function App(props?: { signOut: any; user: any }) {  
  console.log(props?.user)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/view" element={<View></View>}></Route>
      </Routes>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthenticator(App);
