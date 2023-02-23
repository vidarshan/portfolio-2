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
  Textarea,
  TextInput,
  Tooltip,
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
  BsMailbox,
  BsInfoCircleFill,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useNotifications } from "@mantine/notifications";
import { useForm } from "@mantine/hooks";
import emailjs from "emailjs-com";
import { BsFillCircleFill } from "react-icons/bs";

const ReachOut = () => {
  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      email: "",
      message: "",
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      message: (value) => value.trim().length >= 5,
    },
    errorMessages: {
      email: "Email is not valid",
      message: "Message is not valid",
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
        <Alert
          icon={<BsFillCircleFill />}
          title="Available"
          color="green"
          radius="lg"
          variant="light"
        >
          Feel free to drop a message if you have an interesting opportunity for
          me.
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
                color="blue"
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
                label="Other accounts"
              />
            </Col>
            <Col span={12}>
              <Group>
                <Tooltip
                  transitionTimingFunction="ease"
                  label="Gmail"
                  position="bottom"
                  radius="xs"
                  withArrow
                >
                  <Anchor href="mailto:vidarshanadithya3@gmail.com">
                    <ActionIcon variant="hover" size="md">
                      <SiGmail style={{ width: 18, height: 18 }} />
                    </ActionIcon>
                  </Anchor>
                </Tooltip>
                <Tooltip
                  transitionTimingFunction="ease"
                  label="Linkedin"
                  position="bottom"
                  radius="xs"
                  withArrow
                >
                  <Anchor
                    href="https://www.linkedin.com/in/vidarshan-rathnayake/"
                    target="_blank"
                  >
                    <ActionIcon variant="hover" size="md">
                      <BsLinkedin style={{ width: 18, height: 18 }} />
                    </ActionIcon>
                  </Anchor>
                </Tooltip>
                <Tooltip
                  transitionTimingFunction="ease"
                  label="Github"
                  position="bottom"
                  radius="xs"
                  withArrow
                >
                  <Anchor href="https://github.com/vidarshan" target="_blank">
                    <ActionIcon variant="hover" size="md">
                      <BsGithub style={{ width: 18, height: 18 }} />
                    </ActionIcon>
                  </Anchor>
                </Tooltip>
                <Tooltip
                  transitionTimingFunction="ease"
                  label="Stackoverflow"
                  position="bottom"
                  radius="xs"
                  withArrow
                >
                  <Anchor
                    href="https://stackoverflow.com/users/15415996/vidarshan-adithya"
                    target="_blank"
                  >
                    <ActionIcon variant="hover" size="md">
                      <BsStackOverflow style={{ width: 18, height: 18 }} />
                    </ActionIcon>
                  </Anchor>
                </Tooltip>
                <Tooltip
                  transitionTimingFunction="ease"
                  label="Twitter"
                  position="bottom"
                  radius="xs"
                  withArrow
                >
                  <Anchor href="https://twitter.com/VidarshanR" target="_blank">
                    <ActionIcon variant="hover" size="md">
                      <BsTwitter style={{ width: 18, height: 18 }} />
                    </ActionIcon>
                  </Anchor>
                </Tooltip>
              </Group>
            </Col>
            <Col span={12}>
              <Divider
                labelProps={{ size: "sm", weight: 700 }}
                label="My Resume"
              />
            </Col>
            <Col span={12}>
              <Anchor
                href="https://drive.google.com/file/d/1OeF-l8vg8hDI0eVMWhzG2aacRChCWtEy/view?usp=share_link"
                target="_blank"
              >
                <Button leftIcon={<BsCloudDownload />} color="blue" fullWidth>
                  Download my Resume
                </Button>
              </Anchor>
            </Col>
          </Grid>
        </Card>
      </Col>
    </Grid>
  );
};

export default ReachOut;
