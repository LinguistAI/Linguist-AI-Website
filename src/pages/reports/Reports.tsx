import { Anchor, Box, Container, Stack, Title } from "@mantine/core";

const Reports = () => {
  return (
    <Container>
      <Title order={2}>Reports</Title>
      <Box m={20}>
        <Stack>
          <Anchor href="/pdf/reports/LinguistAI_Project_Information_Form.docx">
            Project Information Form
          </Anchor>
          <Anchor
            target="_blank"
            href="/pdf/reports/T2314_Project_Specification_Document.pdf"
          >
            Project Specification Report
          </Anchor>
          <Anchor
            href="/pdf/reports/T2314_Analysis_and_Requirements_Report.pdf"
            target="_blank"
          >
            Analysis and Requirements Report
          </Anchor>
          <Anchor
            href="/pdf/reports/T2314_Detailed_Design_report.docx"
            target="_blank"
          >
            Detailed Design Report
          </Anchor>
          <Anchor href="/pdf/reports/T2314_Final_Report.pdf" target="_blank">
            Final Report
          </Anchor>
        </Stack>
      </Box>
    </Container>
  );
};

export default Reports;
