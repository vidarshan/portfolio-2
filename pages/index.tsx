import {
  Container,
  Button,
  Grid,
  Col,
  ActionIcon,
  useMantineColorScheme,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <Container size={5120}>
          <Container size={1920}>
            <Grid>
              <Col span={11}>
                <Button fullWidth>Icons</Button>
              </Col>
              <Col span={1}>
                <ActionIcon
                  variant="outline"
                  // color={dark ? "yellow" : "blue"}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  dd
                </ActionIcon>
              </Col>
              <Col sx={{ height: "90vh" }} span={12}>
                dd
              </Col>
              <Col sx={{ height: "80vh" }} span={12}>
                dd
              </Col>
              <Col sx={{ height: "80vh" }} span={12}>
                dd
              </Col>
              <Col sx={{ height: "80vh" }} span={12}>
                dd
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
