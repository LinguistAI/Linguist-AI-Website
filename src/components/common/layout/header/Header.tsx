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
import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [activeLink, setActiveLink] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Link
      to={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === activeLink || undefined}
      onClick={() => {
        closeDrawer();
        setActiveLink(index);
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
          <Link
            to="/"
            className={classes.logoLink}
            onClick={() => setActiveLink(0)}
          >
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
