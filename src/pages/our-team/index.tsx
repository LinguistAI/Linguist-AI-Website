import { Box, Container, Flex, Stack, Title } from "@mantine/core";
import { TeamMemberInfoCard } from "./TeamMemberInfoCard";

const OurTeam = () => {
  return (
    <Container maw={1200}>
      <Box m={20}>
        <Flex direction="column" gap={20}>
          <Title order={2}>Our Team</Title>
          <Flex align="center" direction="column" gap={20}>
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "xl", sm: "xl" }}
            >
              <TeamMemberInfoCard
                name="Kardelen Ceren"
                imgSrc="/images/team/kalender-ceren.jpg"
              />
              <TeamMemberInfoCard
                name="Selim Can Güler"
                imgSrc="/images/team/selim-can-guler.webp"
              />
              <TeamMemberInfoCard
                name="Elif Kervan"
                imgSrc="/images/team/elif-kervan.jpg"
              />
              <TeamMemberInfoCard
                name="Tolga Özgün"
                imgSrc="/images/team/tolga-ozgun.png"
              />
              <TeamMemberInfoCard
                name="Yağız Can Aslan"
                imgSrc="/images/team/yagiz-can-aslan.jpg"
              />
            </Flex>
          </Flex>
          <Flex gap="xl" direction={{ base: "column", sm: "row" }}>
            <Stack style={{ flex: 1 }}>
              <Title order={2}>Our Supervisor</Title>

              <TeamMemberInfoCard
                name="Halil Altay Güvenir"
                imgSrc="/images/team/halil-altay-guvenir.jpg"
              />
            </Stack>
            <Stack style={{ flex: 1 }}>
              <Title order={2}>Our Innovation Expert</Title>

              <TeamMemberInfoCard
                name="Ahmet Eren Başak"
                imgSrc="/images/team/ahmet-eren-basak.jpeg"
              />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default OurTeam;
