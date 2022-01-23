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
} from "@mantine/core";
import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import { MantineProvider } from "@mantine/core";
import { getGithubContributions } from "github-contributions-counter";

import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import ReachOut from "../components/ReachOut";
import { useWindowScroll } from "@mantine/hooks";

const Home: NextPage = (allprops: any) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const [scroll, scrollTo] = useWindowScroll();
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
              variant="outline"
              radius="xl"
              size="lg"
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {colorScheme === "dark" ? <BsMoonStarsFill /> : <BsSunFill />}
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
                  <Col xs={12} sm={6} md={6} lg={12} xl={12} span={12}>
                    <ProjectCard />
                  </Col>

                  <Col xs={12} sm={6} md={6} lg={12} xl={12} span={12}>
                    <ProjectCard />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={12} xl={12} span={12}>
                    <ProjectCard />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={12} xl={12} span={12}>
                    <ProjectCard />
                  </Col>
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
    console.log(error);
    return {
      props: { allprops: {} },
      revalidate: 1,
    };
  }
}

export default Home;
