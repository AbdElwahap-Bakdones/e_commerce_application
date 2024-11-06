import {
  useMantineColorScheme,
  Switch,
  useMantineTheme,
  rem,
  Tooltip,
} from "@mantine/core";

import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useState } from "react";

export default function DarkMode() {
  const { setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );
  return (
    <Tooltip label={checked ? "Dark" : "Light"}>
      <Switch
        onChange={(event) => {
          event.currentTarget.checked
            ? setColorScheme("light")
            : setColorScheme("dark");
          setChecked(event.currentTarget.checked);
        }}
        size="md"
        color="#ffefe1"
        onLabel={sunIcon}
        offLabel={moonIcon}
      />
    </Tooltip>
  );
}
