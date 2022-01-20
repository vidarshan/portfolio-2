import { Col, Grid, Text } from "@mantine/core";
import { BiGitBranch, BiStar, BiUpArrowAlt } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <Grid>
      <Col className={styles.flexjustify} span={12}>
        <Text
          color="gray"
          className={styles.flexaligncenter}
          size="xs"
          align="center"
        >
          <BiGitBranch className={styles.iconspacing} /> 1,934{" "}
          <span className={styles.spacer}></span>
          <BiStar className={styles.iconspacing} /> 10 &#8212;&#8212;
          <BiUpArrowAlt className={styles.iconspacing} /> 334{" "}
          <span className={styles.spacer}></span>
          <GoPrimitiveDot color="gold" className={styles.iconspacing} /> 1
          <span className={styles.spacer}></span>
          <GoPrimitiveDot color="silver" className={styles.iconspacing} /> 3
          <span className={styles.spacer}></span>
          <GoPrimitiveDot color="maroon" className={styles.iconspacing} /> 15
        </Text>
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
