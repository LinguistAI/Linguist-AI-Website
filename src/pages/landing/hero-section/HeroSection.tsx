import { Button, Container, Group, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Empower your English journey with{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Linguist AI
          </Text>{" "}
        </h1>

        <Text className={classes.description} c="dimmed"></Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="#features"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Learn More
          </Button>

          <Button
            component="a"
            target="_blank"
            href="https://github.com/LinguistAI/"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
