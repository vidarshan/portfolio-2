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
import { technologies } from "../data/technicalcompetencies";
import profileimg from "../images/myimage.jpeg";

const About = () => {
  return (
    <Grid className="content-spacing">
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
                <Text size="sm" weight={600}>
                  {`I'm`} a passionate Software Engineer who likes to see things
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
                  engineer among the best software engineers.{`"`}
                </Text>
              </Blockquote>{" "}
            </Col>
          </Grid>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={4} xl={5} span={5}>
        <Card>
          <Text weight={500} size="sm">
            Technical Competencies
          </Text>

          <Grid sx={{ marginTop: ".5rem" }}>
            <Col span={12}>
              <Divider
                labelProps={{ size: "sm", weight: 700 }}
                label="Languages"
              />
              <Group sx={{ marginTop: "1rem" }}>
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
                <Group sx={{ marginTop: "1rem" }}>
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

                <Group sx={{ marginTop: "1rem" }}>
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
