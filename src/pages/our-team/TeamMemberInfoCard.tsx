import { Avatar, Paper, Text } from "@mantine/core";

interface TeamMemberInfoCardProps {
  imgSrc: string;
  name: string;
  title?: string;
}

export function TeamMemberInfoCard(props: TeamMemberInfoCardProps) {
  const { imgSrc, name, title } = props;

  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar alt={name} src={imgSrc} size={160} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {title}
      </Text>
    </Paper>
  );
}
