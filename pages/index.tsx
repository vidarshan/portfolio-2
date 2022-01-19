import { Container, Button, Grid, Col } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Container sx={{ backgroundColor: "red" }} size={5120}>
        <Container size={1920}>
          <Grid>
            <Col span={11}>
              <Button fullWidth>Icons</Button>
            </Col>
            <Col span={1}>
              <Button fullWidth>Theme</Button>
            </Col>
            <Col sx={{ height: "90vh", backgroundColor: "green" }} span={12}>
              dd
            </Col>
            <Col sx={{ height: "80vh", backgroundColor: "yellow" }} span={12}>
              dd
            </Col>
            <Col
              sx={{ height: "80vh", backgroundColor: "burlywood" }}
              span={12}
            >
              dd
            </Col>
            <Col
              sx={{ height: "80vh", backgroundColor: "paleturquoise" }}
              span={12}
            >
              dd
            </Col>
            <Col sx={{ height: "80vh", backgroundColor: "skyblue" }} span={12}>
              dd
            </Col>
          </Grid>
          <Footer />
        </Container>
      </Container>
    </MantineProvider>
  );
};

export default Home;
