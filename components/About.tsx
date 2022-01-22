import {
  Badge,
  Blockquote,
  Card,
  Col,
  Divider,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import profileimg from "../images/myimage.jpeg";

const About = () => {
  return (
    <Grid sx={{ marginTop: "2rem" }}>
      <Col xs={12} sm={6} md={8} lg={8} xl={7} span={7}>
        <Card>
          <Grid>
            <Col span={12}>
              <Group>
                <Image
                  width={80}
                  height={80}
                  radius="md"
                  src={profileimg.src}
                  alt="avatar"
                />
                <div>
                  <Text weight={500} size="md">
                    Vidarshan Adithya
                  </Text>
                  <Text color="dimmed" weight={500} size="sm">
                    Software Engineer
                  </Text>
                  <Text color="dimmed" weight={500} size="sm">
                    Computing Graduate
                  </Text>
                </div>
              </Group>
            </Col>
            <Col span={12}>
              <Divider />
              <Blockquote cite="- Vidarshan">
                {" "}
                <Text size="sm" weight={500}>
                  I'm a passionate Software Engineer who likes to see things
                  being built one line of code at a time. Well organised and
                  prefers to have incremental self-development based on the
                  knowledge gained. <br /> <br />I have over 1 year of industry
                  experience, and I am gaining more knowledge day-by-day, as I
                  am a quick learner who likes to implement and make use of the
                  knowledge gained in order to create great things.
                  <br /> <br />
                  My goal is to create high quality software products written
                  with quality code and based on unique ideas, which will have a
                  positive impact to the society while becoming a great software
                  engineer among the best software engineers."
                </Text>
              </Blockquote>{" "}
            </Col>
          </Grid>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={4} xl={5} span={5}>
        <Card>
          <Text size="md">Technical Competencies</Text>

          <Grid sx={{ marginTop: ".5rem" }}>
            <Col span={12}>
              <Divider label="Languages" />
              <Group sx={{ marginTop: "1rem" }}>
                <Badge color="yellow" variant="dot" radius="xs" size="lg">
                  Javascript (ES6+)
                </Badge>
                <Badge variant="dot" radius="xs" size="lg">
                  Typescript
                </Badge>
                <Badge color="yellow" variant="dot" radius="xs" size="lg">
                  Python
                </Badge>
              </Group>
              <div style={{ marginTop: "1rem" }}>
                <Divider label="Frameworks" />
                <Group sx={{ marginTop: "1rem" }}>
                  <Badge variant="dot" radius="xs" size="lg">
                    React JS
                  </Badge>
                  <Badge color="blue" variant="dot" radius="xs" size="lg">
                    React Native
                  </Badge>
                  <Badge color="gray" variant="dot" radius="xs" size="lg">
                    Next JS
                  </Badge>
                  <Badge color="green" variant="dot" radius="xs" size="lg">
                    Node JS
                  </Badge>
                  <Badge color="gray" variant="dot" radius="xs" size="lg">
                    Express JS
                  </Badge>
                </Group>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <Divider label="Other Tools" />

                <Group sx={{ marginTop: "1rem" }}>
                  <Badge color="blue" variant="dot" radius="xs" size="lg">
                    MySQL
                  </Badge>
                  <Badge variant="dot" radius="xs" size="lg">
                    Postgres
                  </Badge>
                  <Badge color="green" variant="dot" radius="xs" size="lg">
                    Mongo DB
                  </Badge>
                  <Badge color="indigo" variant="dot" radius="xs" size="lg">
                    Bootstrap
                  </Badge>
                  <Badge color="pink" variant="dot" radius="xs" size="lg">
                    Redux
                  </Badge>
                  <Badge color="pink" variant="dot" radius="xs" size="lg">
                    SCSS
                  </Badge>
                  <Badge color="orange" variant="dot" radius="xs" size="lg">
                    Semantic UI
                  </Badge>
                  <Badge color="blue" variant="dot" radius="xs" size="lg">
                    Tailwind CSS
                  </Badge>
                  <Badge color="red" variant="dot" radius="xs" size="lg">
                    Ant Design
                  </Badge>
                  <Badge color="gray" variant="dot" radius="xs" size="lg">
                    Cypress.io
                  </Badge>
                  <Badge color="red" variant="dot" radius="xs" size="lg">
                    Redis
                  </Badge>
                  <Badge color="red" variant="dot" radius="xs" size="lg">
                    CI/CD
                  </Badge>
                  <Badge color="red" variant="dot" radius="xs" size="lg">
                    Version Control
                  </Badge>
                </Group>
              </div>
            </Col>
          </Grid>
        </Card>
      </Col>
    </Grid>
  );
};

export default About;
