import React from "react";
import {
  Text,
  Timeline,
  Card,
  Badge,
  Group,
  List,
  Space,
  Divider,
  Anchor,
} from "@mantine/core";
import { BsDash } from "react-icons/bs";
import { BiBriefcase, BiCircle, BiStop } from "react-icons/bi";
import Link from "next/link";

const Work = () => {
  return (
    <Card className="content-spacing" radius="xs" withBorder>
      <Timeline
        color="blue"
        bulletSize={20}
        lineWidth={3}
        radius="lg"
        active={4}
      >
        <Timeline.Item
          align="right"
          title="Intern Software Engineer"
          active={true}
        >
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Excalibur Systems, Sri Lanka
          </Text>
          <Text weight={700} size="sm">
            Contributed as a full stack developer to the team.
          </Text>
          <List spacing="xs" size="sm" center icon={<BiCircle />} mt={30}>
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
            <Badge size="lg" variant="dot" radius="lg">
              React JS
            </Badge>
            <Badge size="lg" color="green" variant="dot" radius="lg">
              Node JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="lg">
              Express JS
            </Badge>
            <Badge size="lg" color="blue" variant="dot" radius="lg">
              Postgres
            </Badge>
            <Badge size="lg" color="yellow" variant="dot" radius="lg">
              Javascript
            </Badge>
          </Group>
          <Group position="right" direction="row">
            <Text weight={700} className="row-bottom-top-spacing" size="sm">
              September 2020 &#8212; April 2021
            </Text>
          </Group>
          <Divider />
        </Timeline.Item>
        <Timeline.Item align="left" title="Trainee Software Engineer">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Beta Launch, Sri Lanka
          </Text>
          <Anchor size="sm">https://www.betalaunch.io/</Anchor>
          <Space h="md" />
          <Text weight={700} size="sm">
            Contributed as a full stack developer to the team.
          </Text>
          <List spacing="xs" size="sm" center icon={<BiCircle />} mt={30}>
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
            <Badge size="lg" variant="dot" radius="lg">
              React JS
            </Badge>
            <Badge size="lg" color="orange" variant="dot" radius="lg">
              Semantic Ui
            </Badge>
            <Badge size="lg" color="pink" variant="dot" radius="lg">
              SCSS
            </Badge>
            <Badge size="lg" color="green" variant="dot" radius="lg">
              Node JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="lg">
              Express JS
            </Badge>
          </Group>
          <Group position="right" direction="row">
            <Text weight={700} className="row-bottom-top-spacing" size="sm">
              April 2021 &#8212; September 2021
            </Text>
          </Group>
          <Divider />
        </Timeline.Item>
        <Timeline.Item title="Associate Software Engineer">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Beta Launch, Sri Lanka
          </Text>
          <Anchor size="sm">https://www.betalaunch.io/</Anchor>
          <Space h="md" />
          <Text weight={700} size="sm">
            Contributed as a full stack developer to the team.
          </Text>
          <List spacing="xs" size="sm" center icon={<BiCircle />} mt={30}>
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
            <Badge size="lg" variant="dot" radius="lg">
              React JS
            </Badge>
            <Badge size="lg" color="green" variant="dot" radius="lg">
              Node JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="lg">
              Express JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="lg">
              Cypress.io
            </Badge>
            <Badge size="lg" color="blue" variant="dot" radius="lg">
              MySQL
            </Badge>
          </Group>
          <Group position="right" direction="row">
            <Text weight={700} className="row-bottom-top-spacing" size="sm">
              September 2021 &#8212; March 2022
            </Text>
          </Group>
          <Divider />
        </Timeline.Item>
        <Timeline.Item title="Associate Software Engineer">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Dev4s, Sri Lanka
          </Text>
          <Anchor href="https://dev4s.com/" target="_blank" size="sm">
            https://dev4s.com/
          </Anchor>
          <Space h="md" />
          <Text weight={700} size="sm">
            Contributed as a full stack developer to the team.
          </Text>
          <List spacing="xs" size="sm" center icon={<BiCircle />} mt={30}>
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
            <Badge size="lg" variant="dot" radius="lg">
              React JS
            </Badge>
            <Badge size="lg" color="green" variant="dot" radius="lg">
              Node JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="lg">
              Express JS
            </Badge>
            <Badge size="lg" color="yellow" variant="dot" radius="lg">
              Firebase
            </Badge>
            <Badge size="lg" color="pink" variant="dot" radius="lg">
              Figma
            </Badge>
          </Group>
          <Group position="right" direction="row">
            <Text weight={700} className="row-bottom-top-spacing" size="sm">
              March 2022 &#8212; April 2022
            </Text>
          </Group>
          <Divider />
        </Timeline.Item>
        <Timeline.Item title="Software Engineer" lineVariant="dotted">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Appspotr
          </Text>
          <Anchor href="https://www.appspotr.com/" target="_blank" size="sm">
            https://www.appspotr.com/
          </Anchor>
          <Space h="md" />
          <Text weight={700} size="sm">
            Building a low-code mobile application develpment platform, which
            allows users to create mobile applications with ease. Contributing
            as a frontend engineer to the team.
          </Text>
          <List spacing="xs" size="sm" center icon={<BiCircle />} mt={30}>
            <List.Item>
              Implementing extensive Javascript/ Typescript based
              functionalities to design and develop mobile apps from a content
              managing system.
            </List.Item>
            <List.Item>
              Gaining experience in developing and maintaining custom user
              interface libraries and React JS library projects.
            </List.Item>
            <List.Item>
              Implementing utility functionalities for React JS applications;
              drag-and-drop functions, etc...
            </List.Item>
            <List.Item>
              Working with React based tools such as Redux Toolkit and Styled
              components, in order to maintain resusable and well refactored
              code.
            </List.Item>
            <List.Item>
              Implementing new functionalities and modifying existing
              functionalities of the platform with best-performace mindset.
            </List.Item>
          </List>
          <Space h="md" />
          <Group className="row-bottom-top-spacing">
            <Badge size="lg" variant="dot" radius="lg">
              React JS
            </Badge>
            <Badge size="lg" color="blue" variant="dot" radius="lg">
              React Native
            </Badge>
          </Group>
          <Group position="right" direction="row">
            <Text weight={700} className="row-bottom-top-spacing" size="sm">
              May 2022 &#8212; Present
            </Text>
          </Group>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Work;
