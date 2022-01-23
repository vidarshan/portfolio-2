import {
  Alert,
  Anchor,
  Button,
  Card,
  Col,
  Divider,
  Grid,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsCloudDownload } from "react-icons/bs";
const ReachOut = () => {
  return (
    <Grid gutter="xl" className="content-spacing">
      <Col span={12}>
        <Alert title="Good News!" color="green" radius="xs">
          I am currently searching for new opportunities. I will be open for job
          offers and other project related offers. Contact me for more info.
        </Alert>
      </Col>
      <Col xs={12} sm={8} md={8} lg={8} xl={8} span={9}>
        <Card>
          <Col span={12}>
            <Divider
              labelProps={{ size: "sm", weight: 700 }}
              label="Send me a message"
            />
          </Col>
          <Col span={12}>
            <TextInput label="Your email" required />
          </Col>
          <Col span={12}>
            <TextInput label="Message" />
          </Col>
          <Col sx={{ marginTop: "1rem" }} span={12}>
            <Button
              leftIcon={<RiSendPlaneFill />}
              variant="default"
              color="dark"
              fullWidth
            >
              Send Message
            </Button>
          </Col>
        </Card>
      </Col>
      <Col xs={12} sm={4} md={4} lg={4} xl={4} span={3}>
        <Card>
          <Grid>
            <Col span={12}>
              <Divider
                labelProps={{ size: "sm", weight: 700 }}
                label="My socials"
              />
            </Col>
            <Col xs={6} span={6}>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Group>
                  <Text size="sm" weight={500}>
                    {" "}
                    Linkedin
                  </Text>
                </Group>
              </Anchor>
            </Col>
            <Col xs={6} span={6}>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Group>
                  <Text size="sm" weight={500}>
                    Github
                  </Text>
                </Group>
              </Anchor>
            </Col>
            <Col span={6}>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Group>
                  <Text size="sm" weight={500}>
                    Stackoverflow
                  </Text>
                </Group>
              </Anchor>
            </Col>
            <Col span={6}>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Group>
                  <Text size="sm" weight={500}>
                    Twitter
                  </Text>
                </Group>
              </Anchor>
            </Col>
            <Col span={12}>
              <Button
                leftIcon={<BsCloudDownload />}
                variant="default"
                color="dark"
                fullWidth
              >
                Download my Resume
              </Button>
            </Col>
          </Grid>
        </Card>
      </Col>
    </Grid>
  );
};

export default ReachOut;
