import {
  ActionIcon,
  Alert,
  Anchor,
  Button,
  Card,
  Col,
  Divider,
  Grid,
  Group,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  BsCloudDownload,
  BsCheckCircle,
  BsXCircle,
  BsLinkedin,
  BsGithub,
  BsStackOverflow,
  BsTwitter,
} from "react-icons/bs";
import { useNotifications } from "@mantine/notifications";
import { useForm } from "@mantine/hooks";
import emailjs from "emailjs-com";
const ReachOut = () => {
  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      email: "",
      message: "",
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
    errorMessages: {
      email: "Email is not valid",
    },
  });

  const sendEmail = async (values: any) => {
    const { email, message } = values;

    var formInfo = {
      email,
      message,
    };
    const emailres = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
      formInfo as any,
      process.env.NEXT_PUBLIC_EMAILJS_USER as string
    );

    if (emailres && emailres.status === 200) {
      notifications.showNotification({
        title: "Success!",
        message: "Message Sent!",
        color: "green",
        icon: <BsCheckCircle />,
      });
    } else {
      notifications.showNotification({
        title: "Oh no!",
        message: "Message not sent!",
        color: "red",
        icon: <BsXCircle />,
      });
    }
    form.reset();
  };

  return (
    <Grid gutter="xl" className="content-spacing">
      <Col span={12}>
        <Alert title="Good News!" color="green" radius="xs">
          I am currently searching for new opportunities. I will be open for job
          offers and other project related offers. Contact me for more info.
        </Alert>
      </Col>
      <Col xs={12} sm={8} md={8} lg={8} xl={8} span={9}>
        <Card withBorder>
          <Col span={12}>
            <Divider
              labelProps={{ size: "sm", weight: 700 }}
              label="Send me a message"
            />
          </Col>
          <form onSubmit={form.onSubmit((values) => sendEmail(values))}>
            <Col span={12}>
              <TextInput
                {...form.getInputProps("email")}
                placeholder="Email"
                label="Your email"
                required
              />
            </Col>
            <Col span={12}>
              <Textarea
                {...form.getInputProps("message")}
                placeholder="Message"
                label="Your Message"
                required
              />
            </Col>
            <Col sx={{ marginTop: "1rem" }} span={12}>
              <Button
                type="submit"
                leftIcon={<RiSendPlaneFill />}
                variant="default"
                color="dark"
                fullWidth
              >
                Send Message
              </Button>
            </Col>
          </form>
        </Card>
      </Col>
      <Col xs={12} sm={4} md={4} lg={4} xl={4} span={3}>
        <Card withBorder>
          <Grid>
            <Col span={12}>
              <Divider
                labelProps={{ size: "sm", weight: 700 }}
                label="My socials"
              />
            </Col>
            <Col span={12}>
              <Group>
                <Anchor
                  href="https://www.linkedin.com/in/vidarshan-rathnayake/"
                  target="_blank"
                >
                  <ActionIcon variant="default" color="dark" size="md">
                    <BsLinkedin style={{ width: 18, height: 18 }} />
                  </ActionIcon>
                </Anchor>
                <Anchor
                  href="https://github.com/vidarshanadithya"
                  target="_blank"
                >
                  <ActionIcon variant="default" color="dark" size="md">
                    <BsGithub style={{ width: 18, height: 18 }} />
                  </ActionIcon>
                </Anchor>
                <Anchor
                  href="https://stackoverflow.com/users/15415996/vidarshan-adithya"
                  target="_blank"
                >
                  <ActionIcon variant="default" color="dark" size="md">
                    <BsStackOverflow style={{ width: 18, height: 18 }} />
                  </ActionIcon>
                </Anchor>
                <Anchor href="https://twitter.com/VidarshanR" target="_blank">
                  <ActionIcon variant="default" color="dark" size="md">
                    <BsTwitter style={{ width: 18, height: 18 }} />
                  </ActionIcon>
                </Anchor>
              </Group>
            </Col>
            {/* <Col xs={6} span={6}>
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
            </Col> */}
            <Col span={12}>
              <Divider
                labelProps={{ size: "sm", weight: 700 }}
                label="My Resume"
              />
            </Col>
            <Col span={12}>
              <Button
                onClick={() =>
                  notifications.showNotification({
                    title: "Success",
                    message: "Message Sent!",
                    color: "red",
                    icon: <BsCheckCircle />,
                  })
                }
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
