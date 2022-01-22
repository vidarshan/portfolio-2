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
import type { NextPage } from "next";
import { useState } from "react";
import { useWindowScroll } from "@mantine/hooks";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import { MantineProvider } from "@mantine/core";

import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import ReachOut from "../components/ReachOut";

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
              <Col span={12}>
                <Divider
                  size="sm"
                  label="Reach Out"
                  labelProps={{ size: "lg", weight: "600" }}
                />
                <ReachOut />
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
