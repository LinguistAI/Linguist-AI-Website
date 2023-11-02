import {
  Anchor,
  Box,
  Burger,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  Space,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const userLinks = [
  {
    link: "https://github.com/LinguistAI/",
    label: "",
    icon: <IconBrandGithubFilled />,
    target: "_blank",
  },
];

const mainLinks = [
  { link: "/", label: "Home" },
  { link: "/team", label: "Our Team" },
  { link: "/reports", label: "Reports" },
  // { link: "/about-us", label: "About Us" },
];

export function Header() {
  const location = useLocation();
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const mainItems = mainLinks.map((item) => (
    <Link
      to={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={location.pathname.endsWith(item.link)}
      onClick={() => {
        closeDrawer();
      }}
    >
      {item.label}
    </Link>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className={classes.secondaryLink}
      target={item.target || ""}
    >
      {item?.icon}
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Group justify="flex-start">
          <Link to="/" className={classes.logoLink}>
            <Title order={1} c="cyan">
              LinguistAI
            </Title>
          </Link>
        </Group>
        <Box className={classes.links} visibleFrom="sm">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggleDrawer}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />

        <Drawer opened={opened} onClose={closeDrawer}>
          <Flex gap={20} direction="column">
            {mainItems}
          </Flex>
          <Space h={20} />
          <Divider />
          <Box p={20}>{secondaryItems}</Box>
        </Drawer>
      </Container>
    </header>
  );
}
