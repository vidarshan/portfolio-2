import { Col, Grid, Text, Tooltip } from "@mantine/core";
import { BiGitBranch, BiStar, BiUpArrowAlt } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import styles from "../styles/Footer.module.css";

const get = require("lodash.get");
const Footer = (allprops: any) => {
  return (
    <Grid>
      <Col className={styles.flexjustify} span={12}>
        <Tooltip
          transitionTimingFunction="ease"
          label="Github/Stackoverflow stats"
          position="top"
          radius="xs"
          withArrow
        >
          <Text
            color="gray"
            className={styles.flexaligncenter}
            size="xs"
            align="center"
            weight={700}
          >
            <BiGitBranch className={styles.iconspacing} />{" "}
            {get(
              allprops,
              "allprops.allprops.contributions_count.data.user.contributionsCollection.contributionCalendar.totalContributions",
              "1934"
            )}
            <span className={styles.spacer}></span>
            <BiStar className={styles.iconspacing} />{" "}
            {get(allprops, "allprops.allprops.star_count", "10")}
            <BiUpArrowAlt className={styles.iconspacing} />{" "}
            {get(allprops, "allprops.allprops.items[0].reputation", "310")}
            <span className={styles.spacer}></span>
            <GoPrimitiveDot color="gold" className={styles.iconspacing} />{" "}
            {get(allprops, "allprops.allprops.items[0].badge_counts.gold", "1")}
            <span className={styles.spacer}></span>
            <GoPrimitiveDot
              color="silver"
              className={styles.iconspacing}
            />{" "}
            {get(
              allprops,
              "allprops.allprops.items[0].badge_counts.silver",
              "3"
            )}
            <span className={styles.spacer}></span>
            <GoPrimitiveDot
              color="maroon"
              className={styles.iconspacing}
            />{" "}
            {get(
              allprops,
              "allprops.allprops.items[0].badge_counts.bronze",
              "15"
            )}
          </Text>
        </Tooltip>
      </Col>
      <Col span={12}>
        <Text size="xs" align="center">
          &copy; Created by Vidarshan using Next.js
        </Text>
      </Col>
    </Grid>
  );
};

export default Footer;
