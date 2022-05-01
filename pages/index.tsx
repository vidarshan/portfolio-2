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
  Group,
  Box,
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
} from "react-icons/bi";
import { useEffect } from "react";
import Testimonials from "../components/TestimonialCard";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";

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
            <Group
              direction="row"
              position="right"
              sx={{
                margin: "0 20px 0px 20px",
                paddingTop: "10px",
                position: "fixed",
                width: "100%",
                right: 0,
                top: 0,
                zIndex: 1000,
                backgroundColor: colorScheme === "dark" ? "#1A1B1E" : "#ffffff",
              }}
            >
              <Group m={10}>
                <ActionIcon
                  title="Home"
                  onClick={() => scrollTo({ y: scrollPositions[0].position })}
                >
                  <BiHomeAlt size={20} />
                </ActionIcon>

                <ActionIcon
                  title="About"
                  onClick={() => scrollTo({ y: scrollPositions[1].position })}
                >
                  <BiSmile size={20} />
                </ActionIcon>

                <ActionIcon
                  title="Work"
                  onClick={() => scrollTo({ y: scrollPositions[2].position })}
                >
                  <BiBriefcaseAlt2 size={20} />
                </ActionIcon>

                <ActionIcon
                  title="Projects"
                  onClick={() => scrollTo({ y: scrollPositions[3].position })}
                >
                  <BiCategoryAlt size={20} />
                </ActionIcon>

                <ActionIcon
                  title="Reach out"
                  onClick={() => scrollTo({ y: scrollPositions[4].position })}
                >
                  <BiMailSend size={20} />
                </ActionIcon>

                <ActionIcon
                  color="yellow"
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
            </Group>
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
              <Grid mt={50}>
                <Header />
                <Box id="aboutSection">
                  <Col className="section-spacing" span={12}>
                    <Divider
                      size="sm"
                      label="About Me"
                      labelProps={{ size: "lg", weight: "600" }}
                    />
                    <About />
                  </Col>
                </Box>
                <Box id="workSection">
                  <Col className="section-spacing" span={12}>
                    <Divider
                      size="sm"
                      label="Work Experience"
                      labelProps={{ size: "lg", weight: "600" }}
                    />
                    <Work />
                  </Col>
                </Box>
                <Box id="projectsSection">
                  <Col className="section-spacing" span={12}>
                    <Divider
                      size="sm"
                      label="Projects"
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
                </Box>
                <Box id="testimonialsSection">
                  <Col className="section-spacing" span={12}>
                    <Divider
                      size="sm"
                      label="Testimonials"
                      labelProps={{ size: "lg", weight: "600" }}
                    />
                    {testimonials.map((testimonial) => {
                      console.log(testimonial);

                      return (
                        <TestimonialCard
                          id={testimonial.id}
                          name={testimonial.name}
                          designation={testimonial.designation}
                          description={testimonial.description}
                          link={testimonial.link}
                          image={testimonial.avatar}
                        />
                      );
                    })}
                  </Col>
                </Box>
                <Box id="reachOutSection">
                  <Col className="section-spacing" span={12}>
                    <Divider
                      size="sm"
                      label="Reach Out"
                      labelProps={{ size: "lg", weight: "600" }}
                    />
                    <ReachOut />
                  </Col>
                </Box>
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
