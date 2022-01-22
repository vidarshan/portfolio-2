import {
  Container,
  Grid,
  Col,
  ActionIcon,
  Text,
  ColorScheme,
  ColorSchemeProvider,
  Title,
  Affix,
  Transition,
  Divider,
  Card,
  TextInput,
  Button,
  Group,
  Alert,
  Anchor,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import { useWindowScroll } from "@mantine/hooks";
import {
  BsMoonStarsFill,
  BsSunFill,
  BsLinkedin,
  BsGithub,
  BsStackOverflow,
  BsTwitter,
  BsCloudDownload,
} from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/Footer";
import { RiSendPlaneFill } from "react-icons/ri";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";

import Link from "next/link";

const Home: NextPage = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          breakpoints: {
            xs: 200,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
          radius: {
            xs: 0,
          },
          fontSizes: {
            sm: 15,
            md: 20,
            lg: 30,
            xl: 50,
          },
        }}
        withGlobalStyles
      >
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <ActionIcon
                color="dark"
                variant="filled"
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                <FiArrowUp />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
        <Container sx={{ marginTop: "1rem" }} size={5120}>
          <Container size={1200}>
            <Grid>
              <Col
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                span={12}
              >
                <ActionIcon
                  color="yellow"
                  variant="outline"
                  radius="xl"
                  size="lg"
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {colorScheme === "dark" ? <BsMoonStarsFill /> : <BsSunFill />}
                </ActionIcon>
              </Col>

              <Header />

              <Col sx={{ marginTop: "5rem", marginBottom: "5rem" }} span={12}>
                <Divider
                  size="sm"
                  label="About Me"
                  labelProps={{ size: "lg", weight: "600" }}
                />
                <About />
              </Col>
              <Col sx={{ marginTop: "5rem", marginBottom: "5rem" }} span={12}>
                <Divider
                  size="sm"
                  label="Work Experience"
                  labelProps={{ size: "lg", weight: "600" }}
                />
                <Work />
              </Col>

              <Col span={12}>
                <Divider
                  size="sm"
                  label="Projects"
                  labelProps={{ size: "lg", weight: "600" }}
                />
                <Grid gutter="xl">
                  <Col span={12}>
                    <ProjectCard />
                  </Col>

                  <Col span={12}>
                    <ProjectCard />
                  </Col>
                  <Col span={12}>
                    <ProjectCard />
                  </Col>
                  <Col span={12}>
                    <ProjectCard />
                  </Col>
                </Grid>
              </Col>
              <Col span={12}>
                <Divider
                  size="sm"
                  label="Reach Out"
                  labelProps={{ size: "lg", weight: "600" }}
                />
                <Grid gutter="xl" sx={{ marginTop: "2rem" }}>
                  <Col span={12}>
                    <Alert title="Good News!" color="green" radius="xs">
                      I am currently searching for new opportunities. I will be
                      open for job offers and other project related offers.
                      Contact me for more info.
                    </Alert>
                  </Col>
                  <Col xs={12} sm={8} md={8} lg={8} xl={8} span={9}>
                    <Card>
                      <Col span={12}>
                        <Divider label="Send me a message" />
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
                      <Col span={6}>
                        <Divider label="My socials" />
                      </Col>

                      <Col xs={6} span={6}>
                        <Anchor href="https://mantine.dev/" target="_blank">
                          <Group>
                            <BsLinkedin />
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
                            <BsGithub />
                            <Text size="sm" weight={500}>
                              Github
                            </Text>
                          </Group>
                        </Anchor>
                      </Col>
                      <Col span={6}>
                        <Anchor href="https://mantine.dev/" target="_blank">
                          <Group>
                            <BsStackOverflow />
                            <Text size="sm" weight={500}>
                              Stackoverflow
                            </Text>
                          </Group>
                        </Anchor>
                      </Col>
                      <Col span={6}>
                        <Anchor href="https://mantine.dev/" target="_blank">
                          <Group>
                            <BsTwitter />
                            <Text size="sm" weight={500}>
                              Twitter
                            </Text>
                          </Group>
                        </Anchor>
                      </Col>

                      <Col span={12}>
                        <Divider label="Resume" />
                      </Col>
                      <Col span={12}>
                        {/* <a
                          href={resume}
                          download="YourName resume.pdf"
                          target="_blank"
                        >
                          Mantine docs
                        </a> */}
                        <Button
                          leftIcon={<BsCloudDownload />}
                          variant="default"
                          color="dark"
                          fullWidth
                        >
                          Download my Resume
                        </Button>
                      </Col>
                    </Card>
                  </Col>
                </Grid>
              </Col>
            </Grid>
            <Footer />
          </Container>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Home;
