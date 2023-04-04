/*
 * RegisterScreen Messages
 *
 * This contains all the text for the RegisterScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.RegisterScreen";

export default defineMessages({
  companyName: {
    id: `${scope}.companyName`,
    defaultMessage: "Company Name",
  },
  shortDescription: {
    id: `${scope}.shortDescription`,
    defaultMessage: "Nice to see you",
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: "Join Us",
  },
  longDescription: {
    id: `${scope}.longDescription`,
    defaultMessage:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.",
  },
  formTitle: {
    id: `${scope}.formTitle`,
    defaultMessage: "Register Account",
  },
  formDescription: {
    id: `${scope}.formDescription`,
    defaultMessage:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "Enter your Email",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Enter Password",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter your Mail",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },
  rememberLabel: {
    id: `${scope}.rememberLabel`,
    defaultMessage: "Remember me",
  },

  forgot: {
    id: `${scope}.forgot`,
    defaultMessage: "Forgot password?",
  },

  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Sign In",
  },

  textSignIn: {
    id: `${scope}.textSignIn`,
    defaultMessage: "Already a member?",
  },

  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Sign up now",
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: "Enter your Name",
  },
  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: "Enter your Name",
  },
  numberLabel: {
    id: `${scope}.numberLabel`,
    defaultMessage: "Enter your Number",
  },
  numberPlaceholder: {
    id: `${scope}.numberPlaceholder`,
    defaultMessage: "Enter your Number",
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: "Confirm Password",
  },
  confirmPasswordPlaceholder: {
    id: `${scope}.confirmPasswordPlaceholder`,
    defaultMessage: "Enter your password again",
  },
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Signed up Successfully",
  },
});
