import {
  Container,
  Grid,
  Col,
  ActionIcon,
  ColorScheme,
  ColorSchemeProvider,
  Affix,
  Transition,
  Divider,
  Button,
  ThemeIcon,
  Group,
} from "@mantine/core";
import Head from "next/head";
import type { NextPage } from "next";
import { FiArrowUp } from "react-icons/fi";
import { MantineProvider } from "@mantine/core";
import { getGithubContributions } from "github-contributions-counter";
import { NotificationsProvider } from "@mantine/notifications";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import ReachOut from "../components/ReachOut";
import { projects } from "../data/projects";
import {
  useWindowScroll,
  useLocalStorageValue,
  useHotkeys,
} from "@mantine/hooks";
import {
  BiBriefcaseAlt2,
  BiCategoryAlt,
  BiHomeAlt,
  BiMailSend,
  BiMoon,
  BiSmile,
  BiSun,
  BiUser,
} from "react-icons/bi";
import { useEffect, useRef } from "react";

const Home: NextPage = (allprops: any) => {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const scrollPositions: Array<any> = [];
  const [scroll, scrollTo] = useWindowScroll();
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  useEffect(() => {
    const aboutSectionElementPosition =
      document.getElementById("aboutSection")?.offsetTop;

    const workSectionElementPosition =
      document.getElementById("workSection")?.offsetTop;

    const projectsSectionElementPosition =
      document.getElementById("projectsSection")?.offsetTop;

    const reachOutSectionElementPosition =
      document.getElementById("reachOutSection")?.offsetTop;

    scrollPositions.push({ section: "home", position: 0 });
    scrollPositions.push({
      section: "about",
      position: aboutSectionElementPosition,
    });
    scrollPositions.push({
      section: "work",
      position: workSectionElementPosition,
    });
    scrollPositions.push({
      section: "projects",
      position: projectsSectionElementPosition,
    });
    scrollPositions.push({
      section: "reachOut",
      position: reachOutSectionElementPosition,
    });

    console.log(scrollPositions);
  }, [scrollPositions]);

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
        <NotificationsProvider position="top-right">
          <Head>
            <title> {`Vidarshan's Portfolio`}</title>
            <meta name="Vidarshans" content="Vidarshan's portfolio website" />
            <meta name="keywords" content="Vidarshan" />
            <meta name="keywords" content="Portfolio website" />
            <meta name="keywords" content="Developer portfolio" />
            <meta name="description" content="Vidarshan's portfolio website" />
            <meta property="og:title" content="Vidarshan's Portolio" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://www.vidarshan.dev/" />
            <meta
              property="og:image"
              content="https://user-images.githubusercontent.com/48169745/162748995-1fc0a078-86eb-49dd-a105-4aa802d9bd26.png"
            />
            <meta
              name="google-site-verification"
              content="NHMus7q0RtvYHc1jbed_gCKPRYuNlMxHkh1vFYJafrA"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Container sx={{ marginTop: "1rem" }} size={5120}>
            <Col
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              span={12}
            >
              <Group>
                <ActionIcon
                  onClick={() => scrollTo({ y: scrollPositions[0].position })}
                >
                  <BiHomeAlt size={20} />
                </ActionIcon>
                <ActionIcon
                  onClick={() => scrollTo({ y: scrollPositions[1].position })}
                >
                  <BiSmile size={20} />
                </ActionIcon>
                <ActionIcon
                  onClick={() => scrollTo({ y: scrollPositions[2].position })}
                >
                  <BiBriefcaseAlt2 size={20} />
                </ActionIcon>
                <ActionIcon
                  onClick={() => scrollTo({ y: scrollPositions[3].position })}
                >
                  <BiCategoryAlt size={20} />
                </ActionIcon>
                <ActionIcon
                  onClick={() => scrollTo({ y: scrollPositions[4].position })}
                >
                  <BiMailSend size={20} />
                </ActionIcon>
                <ActionIcon
                  color="yellow"
                  size="xl"
                  radius="xl"
                  variant="transparent"
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {colorScheme === "dark" ? (
                    <BiMoon size={20} />
                  ) : (
                    <BiSun size={20} />
                  )}
                </ActionIcon>
              </Group>
            </Col>
            <Affix position={{ bottom: 20, right: 20 }}>
              <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                  <ActionIcon
                    style={transitionStyles}
                    onClick={() => scrollTo({ y: 0 })}
                    color="dark"
                    variant="filled"
                  >
                    <FiArrowUp />
                  </ActionIcon>
                )}
              </Transition>
            </Affix>
            <Container size={1200}>
              <Grid>
                <Header />

                <Col className="section-spacing" span={12}>
                  <Divider
                    size="sm"
                    label="About Me"
                    id="aboutSection"
                    labelProps={{ size: "lg", weight: "600" }}
                  />
                  <About />
                </Col>
                <Col className="section-spacing" span={12}>
                  <Divider
                    size="sm"
                    label="Work Experience"
                    id="workSection"
                    labelProps={{ size: "lg", weight: "600" }}
                  />
                  <Work />
                </Col>

                <Col className="section-spacing" span={12}>
                  <Divider
                    size="sm"
                    label="Projects"
                    id="projectsSection"
                    labelProps={{ size: "lg", weight: "600" }}
                  />
                  <Grid className="content-spacing" gutter="xl">
                    {projects.map((project, key) => {
                      return (
                        <Col
                          key={key}
                          xs={12}
                          sm={6}
                          md={6}
                          lg={12}
                          xl={12}
                          span={12}
                        >
                          <ProjectCard
                            id={project.id}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            repo={project.repo}
                            demo={project.demo}
                            technologies={project.technologies}
                          />
                        </Col>
                      );
                    })}
                  </Grid>
                </Col>
                <Col className="section-spacing" span={12}>
                  <Divider
                    size="sm"
                    label="Reach Out"
                    id="reachOutSection"
                    labelProps={{ size: "lg", weight: "600" }}
                  />
                  <ReachOut />
                </Col>
              </Grid>
              <Footer allprops={allprops} />
            </Container>
          </Container>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export async function getStaticProps() {
  const {
    STACKOVERFLOW_USER,
    STACKOVERFLOW_API_KEY,
    GITHUB_USERNAME,
    GITHUB_PAT,
  } = process.env;

  try {
    const stackoverflowresponse = await fetch(
      `https://api.stackexchange.com/2.2/users/${STACKOVERFLOW_USER}?&key=${STACKOVERFLOW_API_KEY}&site=stackoverflow`
    );
    const stackoverflow = await stackoverflowresponse.json();

    const githubresponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/starred`
    );

    const githubcontributionsresponse = await getGithubContributions({
      username: GITHUB_USERNAME as string,
      token: GITHUB_PAT as string,
    });

    const githubstars = await githubresponse.json();
    const githubstarscount = { star_count: githubstars.length };
    const githubcontributionscount = {
      contributions_count: githubcontributionsresponse.data,
    };

    let allprops = {
      ...stackoverflow,
      ...githubstarscount,
      ...githubcontributionscount,
    };

    return {
      props: { allprops },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: { allprops: {} },
      revalidate: 1,
    };
  }
}

export default Home;
