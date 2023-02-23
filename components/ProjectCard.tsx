import {
  Badge,
  Card,
  Col,
  Divider,
  Grid,
  Text,
  Image,
  Group,
  Tooltip,
  Anchor,
  Spoiler,
  Space,
} from "@mantine/core";
import { FaGithub, FaGlobeAfrica } from "react-icons/fa";
import { PropsWithChildren } from "react";

interface IProjectCard {
  id: number;
  name: string;
  description: string;
  image: string;
  repo: string;
  demo: string;
  technologies: Array<any>;
  tags: Array<string>;
}

const ProjectCard: React.FC<PropsWithChildren<IProjectCard>> = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  technologies,
  tags,
}) => {
  return (
    <Card className="full-height-card" padding="lg" withBorder>
      <Grid>
        <Col xs={12} sm={12} md={12} lg={5} xl={12} span={6}>
          <Card.Section>
            <Image
              className="project-image"
              fit="cover"
              src={image}
              alt="project image"
            />
          </Card.Section>
        </Col>
        <Col>
          <Divider />
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
          xl={12}
          span={6}
        >
          <Group position="apart" className="item-spacing-1">
            <Group position="left" direction="row">
              <Text size="md" weight={700}>
                {name}
              </Text>
              {tags.map((tag) => {
                return (
                  <Badge
                    key={tag}
                    radius="lg"
                    variant="dot"
                    color={
                      tag === "Frontend"
                        ? "yellow"
                        : tag === "Full-stack"
                        ? "red"
                        : "green"
                    }
                  >
                    {tag}
                  </Badge>
                );
              })}
            </Group>
            <div>
              {repo === "no-repo" && demo === "no-demo" ? (
                <Badge radius="xs" variant="dot">
                  Upcoming
                </Badge>
              ) : (
                <>
                  {demo !== "no-demo" && (
                    <Tooltip
                      transitionTimingFunction="ease"
                      label="View Demo"
                      position="top"
                      radius="xs"
                      withArrow
                    >
                      <Anchor href={demo} target="_blank">
                        <FaGlobeAfrica className="demo-icon" />
                      </Anchor>
                    </Tooltip>
                  )}

                  {repo !== "no-repo" && (
                    <Tooltip
                      transitionTimingFunction="ease"
                      label="View Repo"
                      position="bottom"
                      radius="xs"
                      withArrow
                    >
                      <Anchor href={repo} target="_blank">
                        <FaGithub />
                      </Anchor>
                    </Tooltip>
                  )}
                </>
              )}
            </div>
          </Group>
          <Space h="xl" />
          <Spoiler
            color=""
            maxHeight={100}
            showLabel="Show more"
            hideLabel="Show less"
          >
            <Text weight={600} align="justify" size="sm">
              {description}
            </Text>
          </Spoiler>
          <Space h="xl" />
          <Group style={{ marginTop: ".6rem" }}>
            {technologies.map((technology: any, key: number) => {
              return (
                <Badge
                  key={key}
                  className="badge-spacing"
                  radius="lg"
                  size="lg"
                  variant="dot"
                  color={technology.color}
                >
                  {technology.name}
                </Badge>
              );
            })}
          </Group>
        </Col>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
