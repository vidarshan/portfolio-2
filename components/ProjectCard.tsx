import {
  Badge,
  Button,
  Card,
  Col,
  Divider,
  Grid,
  Text,
  Image,
  Group,
  Container,
  Spoiler,
} from "@mantine/core";
import React from "react";
import ss from "../images/ss.jpeg";

import { BsEyeFill, BsGithub } from "react-icons/bs";

const ProjectCard = () => {
  return (
    <Card withBorder padding="lg">
      <Grid>
        <Col xs={12} sm={12} md={12} lg={5} xl={5} span={6}>
          <Card.Section>
            <Image fit="cover" src={ss.src} alt="Norway" />
          </Card.Section>
        </Col>
        <Col
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          xs={12}
          sm={12}
          md={12}
          lg={7}
          xl={7}
          span={6}
        >
          <Text sx={{ marginTop: "1rem" }} size="md" weight={700}>
            Norway Ford Adventures
          </Text>

          <div style={{ marginTop: "1rem" }}>
            <Spoiler maxHeight={100} showLabel="more" hideLabel="less">
              <Text weight={500} align="justify" size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                illo sit, velit exercitationem, officia tenetur eum impedit
                doloremque fugiat dignissimos neque modi asperiores obcaecati,
                in perferendis? Blanditiis vel minus sunt voluptatum
                perspiciatis facere deleniti necessitatibus provident earum,
                delectus accusantium tempora! Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </Text>
            </Spoiler>
          </div>
          <Group style={{ marginTop: ".6rem" }}>
            <Badge
              className="badge-spacing"
              radius="xs"
              size="lg"
              variant="dot"
            >
              React JS
            </Badge>
            <Badge
              className="badge-spacing"
              radius="xs"
              size="lg"
              variant="dot"
            >
              Node JS
            </Badge>
            <Badge
              className="badge-spacing"
              radius="xs"
              size="lg"
              variant="dot"
            >
              Express JS
            </Badge>
            <Badge
              className="badge-spacing"
              radius="xs"
              size="lg"
              variant="dot"
            >
              Mongo DB
            </Badge>
          </Group>
          <Grid>
            <Col xs={12} sm={6} md={6} lg={6} xl={6} span={6}>
              <Button
                variant="default"
                color="dark"
                fullWidth
                style={{ marginTop: 14 }}
                leftIcon={<BsEyeFill />}
              >
                View Demo
              </Button>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6} span={6}>
              <Button
                variant="default"
                color="dark"
                fullWidth
                style={{ marginTop: 14 }}
                leftIcon={<BsGithub />}
              >
                View Repository
              </Button>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
