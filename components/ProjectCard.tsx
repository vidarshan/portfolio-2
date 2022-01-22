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
  MediaQuery,
} from "@mantine/core";
import React from "react";
import ss from "../images/ss.jpeg";
import { FaGithub, FaGlobeAfrica } from "react-icons/fa";
import { BsEyeFill, BsGithub } from "react-icons/bs";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

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
          <Group position="apart" className="item-spacing-1">
            <Text size="md" weight={700}>
              Norway Ford Adventures
            </Text>

            <div>
              <FaGlobeAfrica className="demo-icon" />
              <FaGithub />
            </div>
          </Group>

          <div style={{ marginTop: "1rem" }}>
            <Text weight={500} align="justify" size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo
              sit, velit exercitationem, officia tenetur eum impedit doloremque
              fugiat dignissimos neque modi asperiores obcaecati, in
              perferendis? Blanditiis vel minus sunt voluptatum perspiciatis
              facere deleniti necessitatibus provident earum, delectus
              accusantium tempora! Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </Text>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Divider
              labelProps={{ size: "xs", weight: 500 }}
              label="Tech Stack"
            />
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
          </div>
        </Col>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
