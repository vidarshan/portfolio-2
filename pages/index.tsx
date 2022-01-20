import {
  Container,
  Button,
  Grid,
  Col,
  ActionIcon,
  Text,
  ColorScheme,
  ColorSchemeProvider,
  Title,
  Timeline,
  Card,
  Chips,
  Chip,
  Badge,
  Avatar,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import {
  BsCloudSunFill,
  BsMoonStarsFill,
  BsSunFill,
  BsGlobe,
  BsDashCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ss from "../images/ss.jpeg";

const Home: NextPage = () => {
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
        }}
        withGlobalStyles
      >
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
              <Col span={12}></Col>

              <Col
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  height: "90vh",
                }}
                span={12}
              >
                <Text
                  component="span"
                  align="center"
                  variant="gradient"
                  sx={{ fontSize: "60px" }}
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  // size="xl"
                  weight={700}
                >
                  Hello
                </Text>
                <Text
                  component="span"
                  align="center"
                  variant="gradient"
                  sx={{ fontSize: "60px" }}
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  // size="xl"
                  weight={700}
                >
                  I'm Vidarshan
                </Text>
                <Text
                  component="span"
                  align="center"
                  variant="gradient"
                  sx={{ fontSize: "60px" }}
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  // size="xl"
                  weight={700}
                >
                  A Software Engineer
                </Text>
              </Col>

              <Col
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                span={12}
              ></Col>
              <Col sx={{ height: "80vh" }} span={12}>
                <Title order={1}>About Me</Title>

                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam odit quos, ad mollitia corporis quasi facilis
                  debitis voluptatum ipsa hic!
                </Text>

                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam odit quos, ad mollitia corporis quasi facilis
                  debitis voluptatum ipsa hic!
                </Text>

                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam odit quos, ad mollitia corporis quasi facilis
                  debitis voluptatum ipsa hic!
                </Text>
              </Col>
              <Col sx={{ height: "80vh" }} span={12}>
                <Title order={1}>Work Experience</Title>
                <div style={{ marginTop: "2rem" }}>
                  <Timeline
                    color="red"
                    active={2}
                    bulletSize={24}
                    lineWidth={3}
                  >
                    <Timeline.Item
                      bullet={<BsDashCircleFill />}
                      align="right"
                      title="Freelance Web Developer"
                    >
                      <Text color="dimmed" size="sm">
                        Created web based applications for clients desiring
                        solutions for their day-to-day problems that occur in
                        their small/mid scaled businesses.
                      </Text>
                      <Text size="xs" style={{ marginTop: 4 }}>
                        Worked with &#8212; React JS, Relational Databases, Node
                        JS and Express JS
                      </Text>
                      <Text size="xs" style={{ marginTop: 4 }}>
                        04-2021 &#8212; 09-2021
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item
                      bullet={<BsDashCircleFill />}
                      align="left"
                      title="Trainee Software Engineer"
                      lineVariant="dashed"
                    >
                      <Text color="dimmed" size="sm">
                        Worked as a frontend software engineer and implemented
                        new functionalities to existing projects along with
                        replacing old and outdated user interfaces to modern
                        user-friendly user interfaces.
                      </Text>
                      <Text size="xs" style={{ marginTop: 4 }}>
                        Worked with &#8212; React JS, Semantic UI and SCSS
                      </Text>
                      <Text size="xs" style={{ marginTop: 4 }}>
                        04-2021 &#8212; 09-2021
                      </Text>
                    </Timeline.Item>

                    <Timeline.Item
                      bullet={<BsCheckCircleFill />}
                      title="Associate Software Engineer"
                    >
                      <Text color="dimmed" size="sm">
                        Worked as a full-stack software engineer, implemented
                        new functionalities along with improving existing
                        functionalities in special purpose web applications.
                        Gained knowledge on end-to-end testing frameworks for
                        web applications.
                      </Text>
                      <Text size="xs" style={{ marginTop: 4 }}>
                        09-2021 - Present
                      </Text>
                    </Timeline.Item>
                  </Timeline>
                </div>
              </Col>
              <Col span={12}></Col>
              <Col sx={{ height: "80vh" }} span={12}>
                <Title order={1}>Projects</Title>
                <Grid>
                  <Col xs={12} sm={6} md={6} lg={6} xl={6} span={6}>
                    <Card radius="md">
                      <Image
                        // width={500}
                        // height={500}

                        layout="responsive"
                        src={ss}
                        alt="cover"
                      />
                      <Grid>
                        <Col span={12}>
                          <Text size="xl" weight={600}>
                            Techstop
                          </Text>

                          <Text align="justify" size="sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quis dolorum velit placeat consectetur
                            facilis! Ex porro nulla officiis dolor dicta eaque
                            illum magnam. Quam odit quia nemo optio saepe, at
                            quae in sapiente quo quidem repellendus autem beatae
                            dicta sunt.
                          </Text>
                          <Badge
                            sx={{ paddingLeft: 0 }}
                            size="lg"
                            color="teal"
                            leftSection={
                              <Avatar radius="sm">
                                <FaReact />
                              </Avatar>
                            }
                          >
                            React JS
                          </Badge>
                        </Col>
                      </Grid>
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card>ddd</Card>
                  </Col>
                </Grid>
              </Col>
              <Col sx={{ height: "80vh" }} span={12}>
                dd
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
