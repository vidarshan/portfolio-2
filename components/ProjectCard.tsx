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
        <Col span={6}>
          <Card.Section>
            <Image fit="cover" src={ss.src} alt="Norway" />
          </Card.Section>
        </Col>
        <Col
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          span={6}
        >
          <Text sx={{ marginTop: "1rem" }} size="xl" weight={700}>
            Norway Ford Adventures
          </Text>

          <div style={{ marginTop: "1rem" }}>
            <Spoiler maxHeight={100} showLabel="more" hideLabel="less">
              <Text weight={500} align="justify" size="md">
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
            <Col span={6}>
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
            <Col span={6}>
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
    // <Card withBorder radius="md">
    //   <Col span={12}>
    //     <Image layout="responsive" src={ss} alt="cover" />
    //   </Col>
    //   <Col span={12}>
    //     <Text weight={600} size="xl">
    //       Techstop
    //     </Text>
    //   </Col>
    //   <Col span={12}>
    //     <Badge
    //       size="lg"
    //       color="green"
    //       radius="md"
    //       variant="dot"
    //       className="badge-spacing"
    //     >
    //       React JS
    //     </Badge>
    //     <Badge
    //       size="lg"
    //       color="green"
    //       radius="xs"
    //       variant="dot"
    //       className="badge-spacing"
    //     >
    //       React JS
    //     </Badge>
    //     <Badge
    //       size="lg"
    //       color="green"
    //       radius="xs"
    //       variant="dot"
    //       className="badge-spacing"
    //     >
    //       Node JS
    //     </Badge>
    //     <Badge
    //       size="lg"
    //       color="green"
    //       radius="xs"
    //       variant="dot"
    //       className="badge-spacing"
    //     >
    //       Express JS
    //     </Badge>
    //     <Badge
    //       size="lg"
    //       color="green"
    //       radius="xs"
    //       variant="dot"
    //       className="badge-spacing"
    //     >
    //       Mongo DB
    //     </Badge>
    //   </Col>
    //   <Col className="row-spacing" span={12}>
    //     <Divider variant="solid" />
    //     <Text sx={{ padding: "1rem 0" }} align="justify" weight={400} size="md">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis atque
    //       deleniti a nisi, nam quae at sapiente excepturi quia labore voluptate,
    //       ut commodi minus ipsa error ad, inventore blanditiis optio?
    //     </Text>
    //     <Divider variant="dotted" />
    //   </Col>
    //   <Grid>
    //     <Col span={6}>
    //       <Button
    //         size="md"
    //         color="dark"
    //         variant="filled"
    //         radius="md"
    //         fullWidth
    //         leftIcon={<BsGithub />}
    //       >
    //         View Repo
    //       </Button>
    //     </Col>
    //     <Col span={6}>
    //       <Button
    //         size="md"
    //         color="dark"
    //         variant="filled"
    //         radius="md"
    //         fullWidth
    //         leftIcon={<BsGithub />}
    //       >
    //         View Demo
    //       </Button>
    //     </Col>
    //   </Grid>
    // </Card>
  );
};

export default ProjectCard;
