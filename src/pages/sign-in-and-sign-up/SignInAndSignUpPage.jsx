import React from "react";

// import './SignInAndSignUpPage.scss';
import {SignInAndSignUpContainer} from './SignInAndSignUpPage.styles';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
