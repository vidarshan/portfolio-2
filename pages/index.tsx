import {
  Container,
  Grid,
  Col,
  ActionIcon,
  Text,
  ColorScheme,
  ColorSchemeProvider,
  Title,
  Timeline,
  Affix,
  Transition,
  Divider,
  Card,
  TextInput,
  Button,
  Anchor,
  Group,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import { useWindowScroll } from "@mantine/hooks";
import {
  BsMoonStarsFill,
  BsSunFill,
  BsLinkedin,
  BsCheckCircleFill,
  BsGithub,
  BsStackOverflow,
  BsTwitter,
} from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/Footer";

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

              {/* <Header /> */}

              <Col span={12}>
                <Divider
                  size="sm"
                  label="About Me"
                  labelProps={{ size: "xl", weight: "600" }}
                />
                <About />
              </Col>
              <Col span={12}>
                <Title order={1}>Work Experience</Title>
                <Work />
              </Col>

              <Col span={12}>
                <Title order={1}>Projects</Title>
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
              <Col sx={{ height: "80vh" }} span={12}>
                <Divider label="Reach Out" />
                <Grid>
                  <Col span={9}>
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
                        <Button variant="filled" color="dark" fullWidth>
                          Send Message
                        </Button>
                      </Col>
                    </Card>
                  </Col>
                  <Col span={3}>
                    <Card>
                      <Col span={12}>
                        <Divider label="My socials" />
                      </Col>
                      <Col span={12}>
                        <Group>
                          <BsLinkedin />
                          <Text weight={500}>Linkedin</Text>
                        </Group>
                      </Col>
                      <Col span={12}>
                        <Group>
                          <BsGithub />
                          <Text weight={500}>Github</Text>
                        </Group>
                      </Col>
                      <Col span={12}>
                        <Group>
                          <BsStackOverflow />
                          <Text weight={500}>Stackoverflow</Text>
                        </Group>
                      </Col>
                      <Col span={12}>
                        <Group>
                          <BsTwitter />
                          <Text weight={500}>Twitter</Text>
                        </Group>
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
