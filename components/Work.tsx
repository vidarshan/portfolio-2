import React from "react";
import { Text, Timeline, Card, Badge, Group, List, Space } from "@mantine/core";
import { BsDash } from "react-icons/bs";
import { BiCalendar, BiStop } from "react-icons/bi";

const Work = () => {
  return (
    <Card className="content-spacing" withBorder radius="xs">
      <Timeline color="gray" bulletSize={14} lineWidth={3} radius="xs">
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
          <List spacing="xs" size="sm" center icon={<BiStop />} mt={30}>
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
          <List spacing="xs" size="sm" center icon={<BiStop />} mt={30}>
            <List.Item>
              Revamped web applications with old user interfaces to modern and
              updated user interfaces.
            </List.Item>
            <List.Item>
              Implemented and validated new functionalities on frontend in React
              JS based web applications.
            </List.Item>
            <List.Item>
              Modified and improved backend REST {`API's`} functialities.
            </List.Item>
            <List.Item>
              Modified relational {`database's`} structures to cater new
              functionalities.
            </List.Item>
          </List>
          <Space h="md" />
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
            <Badge size="md" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
          </Group>
          <Group position="left" direction="row">
            <BiCalendar />
            <Text weight={500} className="row-bottom-top-spacing" size="xs">
              04-2021 &#8212; 09-2021
            </Text>
          </Group>
        </Timeline.Item>
        <Timeline.Item bullet={<BsDash />} title="Associate Software Engineer">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Beta Launch, Sri Lanka
          </Text>
          <List spacing="xs" size="sm" center icon={<BiStop />} mt={30}>
            <List.Item>
              Gained knowledge and implemented end-to-end testing for web
              applications.
            </List.Item>
            <List.Item>
              Implemented and validated new functionalities on frontend in React
              JS based web applications.
            </List.Item>
            <List.Item>
              Modified and improved backend REST {`API's`} functialities.
            </List.Item>
            <List.Item>
              Modified relational {`database's`} structures to cater new
              functionalities.
            </List.Item>
          </List>
          <Space h="md" />
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
          <Group position="left" direction="row">
            <BiCalendar />
            <Text weight={500} className="row-bottom-top-spacing" size="xs">
              09-2021 &#8212; 03-2022
            </Text>
          </Group>
        </Timeline.Item>
        <Timeline.Item bullet={<BsDash />} title="Associate Software Engineer">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Dev4s, Sri Lanka
          </Text>
          <List spacing="xs" size="sm" center icon={<BiStop />} mt={30}>
            <List.Item>
              Designed user interfaces with Figma and implemented those with
              code.
            </List.Item>
            <List.Item>
              Implemented new functionalities per client requirements both in
              the frontend and the backend.
            </List.Item>
            <List.Item>
              Worked with 3rd party APIs such as Google API to fetch necessary
              information for web applications.
            </List.Item>
          </List>
          <Space h="md" />
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
            <Badge size="md" color="pink" variant="dot" radius="xs">
              Figma
            </Badge>
          </Group>
          <Group position="left" direction="row">
            <BiCalendar />
            <Text weight={500} className="row-bottom-top-spacing" size="xs">
              03-2022 &#8212; 04-2022
            </Text>
          </Group>
        </Timeline.Item>
        <Timeline.Item
          bullet={<BsDash />}
          title="Software Engineer"
          lineVariant="dotted"
        >
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Appspotr
          </Text>
          <Space h="md" />
          <Text weight={500} size="sm">
            Contributing to build a low-code mobile application building
            platform, which allows users to create mobile applications with
            great convenience and ease.
          </Text>
          <Space h="md" />
          <Group className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="blue" variant="dot" radius="xs">
              React Native
            </Badge>
          </Group>
          <Group position="left" direction="row">
            <BiCalendar />
            <Text weight={500} className="row-bottom-top-spacing" size="xs">
              05-2022 &#8212; Present
            </Text>
          </Group>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Work;
