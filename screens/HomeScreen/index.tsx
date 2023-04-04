import FormattedMessage from "theme/FormattedMessage";
import ThemeSwitcher from "components/ThemeSwitch";
import Typography from "@mui/material/Typography";

import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { Button } from "@mui/material";
import { useAuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";

const HomeScreen: React.FC = () => {
  const { signOut } = useAuthContext();
  const router = useRouter();
  return (
    <>
      <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography>
        <ThemeSwitcher />
        <Button
          onClick={() => {
            signOut();
            router.push("/login");
          }}
        >
          <FormattedMessage {...messages.logout} />
        </Button>
      </BoxWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
    </>
  );
};

export default HomeScreen;
