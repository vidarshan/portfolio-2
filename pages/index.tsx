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
} from "@mantine/core";
import Head from "next/head";
import type { NextPage } from "next";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
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

const Home: NextPage = (allprops: any) => {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });
  const [scroll, scrollTo] = useWindowScroll();
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };
  useHotkeys([["mod+J", () => toggleColorScheme()]]);

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
            <title>Vidarshan</title>
            <meta name="Vidarshans" content="Vidarshan's portfolio website" />
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
              <ActionIcon
                color="yellow"
                size="xl"
                radius="xl"
                variant="outline"
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {colorScheme === "dark" ? (
                  <BsMoonStarsFill />
                ) : (
                  <BsSunFill size="20" />
                )}
              </ActionIcon>
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
                    labelProps={{ size: "lg", weight: "600" }}
                  />
                  <About />
                </Col>
                <Col className="section-spacing" span={12}>
                  <Divider
                    size="sm"
                    label="Work Experience"
                    labelProps={{ size: "lg", weight: "600" }}
                  />
                  <Work />
                </Col>

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
                <Col className="section-spacing" span={12}>
                  <Divider
                    size="sm"
                    label="Reach Out"
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
