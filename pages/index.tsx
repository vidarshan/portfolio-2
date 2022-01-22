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
  Affix,
  Card,
  Group,
  Image,
  Badge,
  Blockquote,
  Divider,
  Transition,
  Avatar,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import { useWindowScroll } from "@mantine/hooks";
import {
  BsArrowRight,
  BsMoonStarsFill,
  BsSunFill,
  BsLink,
  BsDashCircleFill,
  BsCheckCircleFill,
  BsGithub,
  BsFillEyeFill,
} from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FiExternalLink, FiLink, FiArrowUp } from "react-icons/fi";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ss from "../images/ss.jpeg";
import profileimg from "../images/myimage.jpeg";
import { BiLink } from "react-icons/bi";
import ProjectCard from "../components/ProjectCard";

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
              <Col span={12}>
                <Title order={1}>About Me</Title>

                <Grid sx={{ marginTop: "2rem" }}>
                  <Col xs={12} sm={6} md={8} lg={8} xl={7} span={7}>
                    <Card>
                      <Grid>
                        <Col span={12}>
                          <Group>
                            <Image
                              width={80}
                              height={80}
                              radius="md"
                              src={profileimg.src}
                              alt="avatar"
                            />
                            <div>
                              <Text weight={700}>Vidarshan Adithya</Text>
                              <Text weight={500} size="sm">
                                Software Engineer
                              </Text>
                              <Text weight={500} size="sm">
                                Computing Graduate
                              </Text>
                            </div>
                          </Group>
                        </Col>
                        <Col span={12}>
                          <Divider />
                          <Blockquote cite="- Vidarshan">
                            {" "}
                            <Text weight={600}>
                              "A passionate Software Engineer who likes to see
                              things being built one line of code at a time.
                              Well organised and prefers to have incremental
                              self-development based on the knowledge gained.{" "}
                              <br /> <br />I have over 1 year of industry
                              experience, and I am gaining more knowledge
                              day-by-day, as I am a quick learner who likes to
                              implement and make use of the knowledge gained in
                              order to create great things.
                              <br /> <br />
                              My goal is to create high quality software
                              products written with quality code and based on
                              unique ideas, which will have a positive impact to
                              the society and to be a better software engineer
                              among the best software engineers."
                            </Text>
                          </Blockquote>{" "}
                        </Col>
                      </Grid>
                    </Card>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={4} xl={5} span={5}>
                    <Card>
                      <Text size="xl" weight={700}>
                        Technical Competencies
                      </Text>

                      <Grid sx={{ marginTop: ".5rem" }}>
                        <Col span={12}>
                          <Text
                            sx={{ marginTop: "1rem" }}
                            size="md"
                            weight={600}
                          >
                            Languages
                          </Text>
                          <Divider />
                          <Badge
                            color="yellow"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Javascript
                          </Badge>
                          <Badge
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Typescript
                          </Badge>
                          <Badge
                            color="yellow"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Python
                          </Badge>
                          <Text
                            sx={{ marginTop: "1rem" }}
                            size="md"
                            weight={600}
                          >
                            Frameworks
                          </Text>
                          <Divider />
                          <Badge
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            React JS
                          </Badge>
                          <Badge
                            color="blue"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            React Native
                          </Badge>
                          <Badge
                            color="gray"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Next JS
                          </Badge>
                          <Badge
                            color="green"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Node JS
                          </Badge>
                          <Badge
                            color="gray"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Express JS
                          </Badge>

                          <Text
                            sx={{ marginTop: "1rem" }}
                            size="md"
                            weight={600}
                          >
                            Other Tools
                          </Text>
                          <Divider />
                          <Badge
                            color="blue"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            MySQL
                          </Badge>
                          <Badge
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Postgres
                          </Badge>
                          <Badge
                            color="green"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Mongo DB
                          </Badge>
                          <Badge
                            color="indigo"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Bootstrap
                          </Badge>
                          <Badge
                            color="pink"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Redux
                          </Badge>
                          <Badge
                            color="blue"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            CSS
                          </Badge>
                          <Badge
                            color="orange"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Semantic UI
                          </Badge>
                          <Badge
                            color="blue"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Tailwind CSS
                          </Badge>
                          <Badge
                            color="red"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Ant Design
                          </Badge>
                          <Badge
                            color="gray"
                            variant="dot"
                            className="badge-spacing"
                            radius="xs"
                            size="lg"
                          >
                            Cypress.io
                          </Badge>
                        </Col>
                      </Grid>
                    </Card>
                  </Col>
                </Grid>
              </Col>
              <Col span={12}>
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
                      <Text weight={600} color="dimmed" size="md">
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
