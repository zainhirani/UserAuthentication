import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import LoginForm from "./LoginForm";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { LOGO, LoginBG } from "configs";
import Image from "theme/Image";

const LoginScreen: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
        <BoxWrapper
          sx={{
            flexDirection: "column",
            // backgroundColor: (theme) => theme.palette.primary.main,
            backgroundImage: `url(${LoginBG})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "0",
          }}
        >
          <BoxWrapper
            sx={{ gap: "1em", alignSelf: "start", paddingLeft: "3em" }}
          >
            <Image src={LOGO} width={60} height={60} />
            <Typography variant="h6" component="h6">
              <FormattedMessage {...messages.companyName} />
            </Typography>
          </BoxWrapper>
          <BoxWrapper sx={{ flexDirection: "column", paddingTop: "0" }}>
            <Typography variant="h6" component="h6">
              <FormattedMessage {...messages.shortDescription} />
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{ textTransform: "uppercase" }}
            >
              <FormattedMessage {...messages.title} />
            </Typography>
            <Typography
              component="p"
              sx={{ textAlign: "center", marginTop: "2em", padding: " 0 1em" }}
            >
              <FormattedMessage {...messages.longDescription} />
            </Typography>
          </BoxWrapper>
        </BoxWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <BoxWrapper>
          <Box sx={{ width: "80%" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3" component="h3" mb={2}>
                <FormattedMessage {...messages.formTitle} />
              </Typography>
              <Typography variant="subtitle2" component="p" mb={5}>
                <FormattedMessage {...messages.formDescription} />
              </Typography>
            </Box>
            <Box>
              <LoginForm />
            </Box>
          </Box>
        </BoxWrapper>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
