import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import * as Yup from "yup";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { ButtonWrapper, GridWrapper } from "./Styled";
import { register } from "services/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  number: Yup.string().required().label("Number"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const RegisterForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onSubmit = useCallback(async (data: any) => {
    const resp: any = await register({
      name: data.name,
      number: data.number,
      email: data.email,
      password: data.password,
      password_repeat: data.confirmPassword,
    })
      .then((userCredential: any) => {
        // Signed Up
        const user = userCredential.user;
        router.push("/login");
        enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        enqueueSnackbar(errorMessage, {
          variant: "error",
        });
      });
  }, []);

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit,
    });

  // handleResetPass
  const handleResetPass = (email: string) => {};

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const namePlaceholder = useFormattedMessage(messages.namePlaceholder);
  const numberPlaceholder = useFormattedMessage(messages.numberPlaceholder);
  const confirmPasswordPlaceholder = useFormattedMessage(
    messages.confirmPasswordPlaceholder,
  );

  return (
    <form onSubmit={handleSubmit}>
      <GridWrapper container direction={"column"} spacing={5}>
        <GridWrapper item style={{ display: "flex", gap: "1em" }}>
          <TextField
            id="name"
            name="name"
            label={<FormattedMessage {...messages.nameLabel} />}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={namePlaceholder}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            autoComplete="off"
          />
          <TextField
            id="number"
            name="number"
            label={<FormattedMessage {...messages.numberLabel} />}
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={numberPlaceholder}
            error={touched.number && Boolean(errors.number)}
            helperText={touched.number && errors.number}
            autoComplete="off"
            type={"number"}
          />
        </GridWrapper>
        <GridWrapper item>
          <TextField
            id="email"
            name="email"
            label={<FormattedMessage {...messages.emailLabel} />}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={emailPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="off"
            type={"email"}
          />
        </GridWrapper>

        <GridWrapper item>
          <TextField
            id="password"
            name="password"
            label={<FormattedMessage {...messages.passwordLabel} />}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder={passwordPlaceholder}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            autoComplete="off"
          />
        </GridWrapper>
        <GridWrapper item>
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label={<FormattedMessage {...messages.confirmPasswordLabel} />}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder={confirmPasswordPlaceholder}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
            autoComplete="off"
          />
        </GridWrapper>
      </GridWrapper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              id="Remember"
              name="fav_language"
              value="Remember"
              color="secondary"
            />
          }
          label={<FormattedMessage {...messages.rememberLabel} />}
        />
      </Box>

      <Box>
        <ButtonWrapper type="submit" variant="contained">
          <FormattedMessage {...messages.signUp} />
        </ButtonWrapper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormattedMessage {...messages.textSignIn} />
        <Link href="/login" underline="none">
          <FormattedMessage {...messages.signIn} />
        </Link>
      </Box>
    </form>
  );
};

export default RegisterForm;
