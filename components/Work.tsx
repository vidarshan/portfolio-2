import React from "react";
import { Text, Timeline, Card, Badge, Group, List, Space } from "@mantine/core";
import { BsCheckCircle, BsDash, BsDashCircle, BsDashLg } from "react-icons/bs";
import { BiCalendar, BiData } from "react-icons/bi";

const Work = () => {
  return (
    <Card className="content-spacing" withBorder radius="xs">
      <Timeline
        color="gray"
        active={3}
        bulletSize={14}
        lineWidth={3}
        radius="xs"
      >
        <Timeline.Item
          bullet={<BsDash />}
          align="right"
          title="Intern Software Engineer"
        >
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Excalibur Systems, Sri Lanka
          </Text>
          <List size="sm" mt={30}>
            <List.Item>
              Contributed to existing web applications based on React JS, to
              extend and improve their functionality.
            </List.Item>
            <List.Item>
              Designed user Interfaces and implemented the designs with code.
            </List.Item>
            <List.Item>
              Built completely new web applications for small-mid scale
              businesses.
            </List.Item>
            <List.Item>
              Gained knowledge on deploying applications to the web.
            </List.Item>
          </List>
          <Space h="md" />
          <Group mt={30} className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
            <Badge size="md" color="blue" variant="dot" radius="xs">
              Postgres
            </Badge>
            <Badge size="md" color="yellow" variant="dot" radius="xs">
              Javascript
            </Badge>
          </Group>

          <Group position="left" direction="row">
            <BiCalendar />
            <Text weight={600} className="row-bottom-top-spacing" size="xs">
              12-2020 &#8212; 04-2021
            </Text>
          </Group>
        </Timeline.Item>
        <Timeline.Item
          bullet={<BsDash />}
          align="left"
          title="Trainee Software Engineer"
        >
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Beta Launch, Sri Lanka
          </Text>
          <Text weight={700} color="dimmed" size="sm">
            Worked as a frontend software engineer and implemented new
            functionalities to existing projects along with replacing old and
            outdated user interfaces to modern user-friendly user interfaces.
          </Text>
          <Group className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="orange" variant="dot" radius="xs">
              Semantic Ui
            </Badge>
            <Badge size="md" color="pink" variant="dot" radius="xs">
              SCSS
            </Badge>
          </Group>
          <Group>
            <BiData size="10px" />
            <Text weight={500} className="row-bottom-top-spacing" size="xs">
              04-2021 &#8212; 09-2021
            </Text>
          </Group>
        </Timeline.Item>

        <Timeline.Item
          bullet={<BsDash />}
          title="Associate Software Engineer"
          lineVariant="dashed"
        >
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Beta Launch, Sri Lanka
          </Text>
          <Text weight={700} color="dimmed" size="sm">
            Worked as a full-stack software engineer, implemented new
            functionalities along with improving existing functionalities in
            special purpose web applications. Gained knowledge on end-to-end
            testing frameworks for web applications.
          </Text>
          <Group className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Cypress.io
            </Badge>
            <Badge size="md" color="blue" variant="dot" radius="xs">
              MySQL
            </Badge>
          </Group>
          <Text weight={500} className="row-bottom-top-spacing" size="xs">
            09-2021 &#8212; 03-2022
          </Text>
        </Timeline.Item>
        <Timeline.Item bullet={<BsDash />} title="Associate Software Engineer">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Dev4s
          </Text>
          <Text weight={700} color="dimmed" size="sm">
            Working as a full-stack software developer for applications based on
            MERN stack. Heavy on frontend, implementing User Interfaces based on
            low-level prototypes to the production.
          </Text>
          <Group className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
            <Badge size="md" color="yellow" variant="dot" radius="xs">
              Firebase
            </Badge>
          </Group>
          <Text weight={500} className="row-bottom-top-spacing" size="xs">
            03-2022 &#8212; Present
          </Text>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Work;
