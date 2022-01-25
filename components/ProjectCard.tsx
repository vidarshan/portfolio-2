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
}

const ProjectCard: React.FC<PropsWithChildren<IProjectCard>> = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  technologies,
}) => {
  return (
    <Card withBorder padding="lg">
      <Grid>
        <Col xs={12} sm={12} md={12} lg={5} xl={5} span={6}>
          <Card.Section>
            <Image fit="cover" src={image} alt="project image" />
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
              {name}
            </Text>
            <div>
              {repo === "no-repo" && demo === "no-demo" ? (
                <Badge radius="xs" variant="outline">
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

          <div style={{ marginTop: "1rem" }}>
            <Text weight={600} align="justify" size="sm">
              {description}
            </Text>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Divider
              labelProps={{ size: "xs", weight: 500 }}
              label="Tech Stack"
            />
            <Group style={{ marginTop: ".6rem" }}>
              {technologies.map((technology: any, key: number) => {
                return (
                  <Badge
                    key={key}
                    className="badge-spacing"
                    radius="xs"
                    size="md"
                    variant="dot"
                    color={technology.color}
                  >
                    {technology.name}
                  </Badge>
                );
              })}
            </Group>
          </div>
        </Col>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
