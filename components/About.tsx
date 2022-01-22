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
                  <Text weight={700}>Vidarshan Adithya</Text>
                  <Text weight={500} size="sm">
                    Software Engineer
                  </Text>
                  <Text weight={500} size="sm">
                    Computing Graduate
                  </Text>
                </div>
              </Group>
            </Col>
            <Col span={12}>
              <Divider />
              <Blockquote cite="- Vidarshan">
                {" "}
                <Text weight={600}>
                  "A passionate Software Engineer who likes to see things being
                  built one line of code at a time. Well organised and prefers
                  to have incremental self-development based on the knowledge
                  gained. <br /> <br />I have over 1 year of industry
                  experience, and I am gaining more knowledge day-by-day, as I
                  am a quick learner who likes to implement and make use of the
                  knowledge gained in order to create great things.
                  <br /> <br />
                  My goal is to create high quality software products written
                  with quality code and based on unique ideas, which will have a
                  positive impact to the society and to be a better software
                  engineer among the best software engineers."
                </Text>
              </Blockquote>{" "}
            </Col>
          </Grid>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={4} xl={5} span={5}>
        <Card>
          <Text size="xl" weight={700}>
            Technical Competencies
          </Text>

          <Grid sx={{ marginTop: ".5rem" }}>
            <Col span={12}>
              <Text sx={{ marginTop: "1rem" }} size="md" weight={600}>
                Languages
              </Text>
              <Divider />
              <Badge
                color="yellow"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Javascript
              </Badge>
              <Badge
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Typescript
              </Badge>
              <Badge
                color="yellow"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Python
              </Badge>
              <Text sx={{ marginTop: "1rem" }} size="md" weight={600}>
                Frameworks
              </Text>
              <Divider />
              <Badge
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                React JS
              </Badge>
              <Badge
                color="blue"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                React Native
              </Badge>
              <Badge
                color="gray"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Next JS
              </Badge>
              <Badge
                color="green"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Node JS
              </Badge>
              <Badge
                color="gray"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Express JS
              </Badge>

              <Text sx={{ marginTop: "1rem" }} size="md" weight={600}>
                Other Tools
              </Text>
              <Divider />
              <Badge
                color="blue"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                MySQL
              </Badge>
              <Badge
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Postgres
              </Badge>
              <Badge
                color="green"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Mongo DB
              </Badge>
              <Badge
                color="indigo"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Bootstrap
              </Badge>
              <Badge
                color="pink"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Redux
              </Badge>
              <Badge
                color="blue"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                CSS
              </Badge>
              <Badge
                color="orange"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Semantic UI
              </Badge>
              <Badge
                color="blue"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Tailwind CSS
              </Badge>
              <Badge
                color="red"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Ant Design
              </Badge>
              <Badge
                color="gray"
                variant="dot"
                className="badge-spacing"
                radius="xs"
                size="lg"
              >
                Cypress.io
              </Badge>
            </Col>
          </Grid>
        </Card>
      </Col>
    </Grid>
  );
};

export default About;
