import {
  Badge,
  Blockquote,
  Card,
  Col,
  Divider,
  Grid,
  Group,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { technologies } from "../data/technicalcompetencies";
import profileimg from "../images/myimage.webp";

const About = () => {
  return (
    <Grid className="content-spacing">
      <Col xs={12} sm={6} md={6} lg={7} xl={7} span={7}>
        <Card withBorder>
          <Grid>
            <Col span={12}>
              <Group>
                <Image
                  width={70}
                  height={70}
                  radius="xs"
                  src={profileimg.src}
                  alt="avatar"
                />
                <div>
                  <Text weight={600} size="md">
                    Vidarshan Adithya
                  </Text>
                  <Text weight={500} size="sm">
                    Software Engineer
                  </Text>
                  <Text color="dimmed" weight={700} size="xs">
                    Computing Graduate
                  </Text>
                </div>
              </Group>
            </Col>
            <Col span={12}>
              <Divider />
              <Blockquote cite="- Vidarshan">
                {" "}
                <Text size="sm" weight={600}>
                  {`I'm`} a Software Engineer who likes to see things being
                  built one line of code at a time. Well organised and prefers
                  to have incremental self-development based on the knowledge
                  gained. <br /> <br />I have nearly 2 years of industry
                  experience, and I am gaining more knowledge day-by-day, as I
                  am a quick learner who likes to implement and make use of the
                  knowledge gained in order to create great things.
                  <br /> <br />
                  My goal is to create high quality software products written
                  with quality code and based on unique ideas, which will have a
                  positive impact to the society, while becoming a great
                  software engineer among the best software engineers.{`"`}
                </Text>
              </Blockquote>{" "}
            </Col>
          </Grid>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={6} lg={5} xl={5} span={5}>
        <Card withBorder>
          <Grid className="item-spacing-half">
            <Col span={12}>
              <Divider
                labelProps={{ size: "sm", weight: 700 }}
                label="Languages"
              />
              <Group className="item-spacing-1">
                {technologies.map((tech) => {
                  if (tech.type === "language") {
                    return (
                      <Badge
                        key={tech.id}
                        color={tech.color}
                        variant="dot"
                        radius="xs"
                        size="lg"
                      >
                        {tech.name}
                      </Badge>
                    );
                  }
                })}
              </Group>
              <div className="item-spacing-1">
                <Divider
                  labelProps={{ size: "sm", weight: 700 }}
                  label="Frameworks"
                />
                <Group className="item-spacing-1">
                  {technologies.map((tech) => {
                    if (tech.type === "framework") {
                      return (
                        <Badge
                          key={tech.id}
                          color={tech.color}
                          variant="dot"
                          radius="xs"
                          size="lg"
                        >
                          {tech.name}
                        </Badge>
                      );
                    }
                  })}
                </Group>
              </div>

              <div className="item-spacing-1">
                <Divider
                  labelProps={{ size: "sm", weight: 700 }}
                  label="Other Tools"
                />

                <Group className="item-spacing-1">
                  {technologies.map((tech) => {
                    if (tech.type === "other") {
                      return (
                        <Badge
                          key={tech.id}
                          color={tech.color}
                          variant="dot"
                          radius="xs"
                          size="lg"
                        >
                          {tech.name}
                        </Badge>
                      );
                    }
                  })}
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
