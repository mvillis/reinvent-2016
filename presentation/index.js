// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  serverless: require("../assets/serverless.png")
};

preloader(images);

const theme = createTheme({
  primary: "#fd9526"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              REINVENT:2016
            </Heading>
            <Heading size={1} fit caps>
              Mike Villis
            </Heading>
            <Heading size={2} fit caps textColor="black">
              Lessons Learnt in the Desert
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="">
            <List size={1} textColor="white" caps>
              <ListItem>Trends</ListItem>
              <ListItem>Takeaways</ListItem>
              <ListItem>Final Words</ListItem>
            </List>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Three Things
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <List size={1} textColor="white" caps>
              <ListItem>Serverless</ListItem>
              <ListItem>Machine Learning Becoming the new Norm</ListItem>
              <ListItem>Voice / Intent based development</ListItem>
              <ListItem>Hybrid Cloud</ListItem>
            </List>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Trends
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.serverless.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Serverless
            </Heading>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="primary">
                Greengrass
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Step Functions
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps textColor="primary">
                C#
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Serverless</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Good
                </Heading>
                <Appear fid="1">
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Ecosystem getting richer
                  </Heading>
                </Appear>
                <Appear fid="2">
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Distributed Compute Options
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Cautions
                </Heading>
                <Appear fid="1">
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Not all in Sydney
                  </Heading>
                </Appear>
                <Appear fid="2">
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    In Limited Preview
                  </Heading>
                </Appear>
                <Appear fid="3">
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Edge cases
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>“I believe ‘operations’ includes the way we develop software.”</Quote>
              <Cite>Werner Vogels</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              REINVENT:2016
            </Heading>
            <Heading size={1} fit caps textColor="#fd9526">
              Mike Villis
            </Heading>
            <Heading size={2} fit caps textColor="black">
              Lessons Learnt in the Desert
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
