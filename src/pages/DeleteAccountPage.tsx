import { Button, Container, Group, Paper, Text, Title } from "@mantine/core";

const DeleteAccountPage = () => {
  const handleMailTo = () => {
    window.location.href =
      "mailto:linguistai@googlegroups.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20account%20and%20all%20associated%20data.%20Thank%20you.";
  };

  return (
    <Container size="sm" my={40}>
      <Paper shadow="sm" p="md">
        <Title order={2} ta="center" mb="md">
          Delete Your Account
        </Title>
        <Text ta="center" mb="lg">
          If you wish to delete your account, please send an email to
          <Text component="span" fw={500}>
            {" "}
            linguistai@googlegroups.com{" "}
          </Text>
          and we will delete all your data within 24 hours.
        </Text>
        <Group>
          <Button onClick={handleMailTo}>Send Deletion Request Email</Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default DeleteAccountPage;
