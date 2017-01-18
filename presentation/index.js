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
  serverless: require("../assets/serverless.png"),
  presoBackground: require("../assets/preso_background.jpg"),
  netflix: require("../assets/netflix.png"),
  twitter: require("../assets/twitter.png"),
  hybrid: require("../assets/hybrid.jpg"),
  ml: require("../assets/ml.jpg"),
  snow: require("../assets/snow.jpg"),
  reinvent1: require("../assets/reinvent1.jpg")

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
            <Link href="http://mvillis.github.io/reinvent-2016/">
              <Text margin="20px 0px 0px">http://mvillis.github.io/reinvent-2016/</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="">
            <List size={1} textColor="white" caps>
              <ListItem>About</ListItem>
              <ListItem>Trends</ListItem>
              <ListItem>Next Steps</ListItem>
            </List>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Three Things
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.reinvent1.replace("/", "")} bgDarken={0.75} notes="">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Reinvent 2016 Stats
            </Heading>
            <List size={1} textColor="white" caps>
              <ListItem>30,000 people</ListItem>
              <ListItem>Over 400 breakout sessions</ListItem>
              <ListItem>Across 2 Casinos</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Reinvent Wish List
            </Heading>
            <List size={1} textColor="white" caps>
              <ListItem>API Gateway VPC Support</ListItem>
              <ListItem>Live EBS Disk Expansion</ListItem>
              <ListItem>Everything announced to be in Sydney</ListItem>
            </List>
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
            <Appear fid="3">
              <Heading size={1} caps fit textColor="tertiary">
                Step Functions
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={1} caps textColor="primary">
                C#
              </Heading>
            </Appear>
            <Appear fid="5">
              <Heading size={1} caps textColor="primary">
                Lambda Edge
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
              <Quote>“Our goal......put futuristic technologies which are cumbersome, complex or capital intensive into the hands of every developer”</Quote>
              <Cite>Matt Wood</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.ml.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Machine Learning / AI
            </Heading>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="primary">
                Polly
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Rekognition
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps textColor="primary">
                Lex
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>ML / AI</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Good
                </Heading>
                <Appear fid="1">
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    More SaaS options
                  </Heading>
                </Appear>
                <Appear fid="2">
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    New Compute Types
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
                    Consider the field
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.serverless.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Voice / Intent Based Development
            </Heading>
              <Heading size={1} caps textColor="primary">
                Alexa
              </Heading>
            <Layout>
              <Fill>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-MtwpZFmexg" frameborder="0" allowfullscreen></iframe>
              </Fill>
              <Fill>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/A1IimPNpMrg" frameborder="0" allowfullscreen></iframe>
              </Fill>
            </Layout>
            <Link href='https://youtu.be/OnFEs5eIlqI'>
              <Text textColor='white'>Davis</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.hybrid.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Hybrid Cloud
            </Heading>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="primary">
                VMWare
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.presoBackground.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Presentations to Check Out
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps underline>
              Another Day in the Life of a Netflix Engineer
            </Heading>
            <Text textColor="white">Dave Hahn, Senior SRE & Chief AWS Botherer</Text>
            <Text>------</Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aWgtRKfrtMY" frameborder="0" allowfullscreen></iframe>
            <Text>------</Text>
            <Text textColor="white">Great General Viewing: How to be fast when you're really big.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps underline>
              Encryption: It Was the Best of Controls, It Was the Worst of Controls
            </Heading>
            <Text textColor="white">Eric Brandwine, Senior Principal Engineer, AWS Security</Text>
            <Text>------</Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zmMpgbIhCpw" frameborder="0" allowfullscreen></iframe>
            <Text>------</Text>
            <Text textColor="white">Deep Dive. Expect to go and review your company's encryption after watching.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps underline>
              Tuesday Night Live with James Hamilton
            </Heading>
            <Text textColor="white">James Hamilton, Vice Pricident & Distinguished Engineer, AWS</Text>
            <Text>------</Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AyOAjFNPAbA" frameborder="0" allowfullscreen></iframe>
            <Text>------</Text>
            <Text textColor="white">For Hardcore Infrastructure folk.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps underline>
              Serverless Architectural Patterns and Best Practices
            </Heading>
            <Text textColor="white">AWS & BMC</Text>
            <Text>------</Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b7UMoc1iUYw" frameborder="0" allowfullscreen></iframe>
            <Text>------</Text>
            <Text textColor="white">Perfect for folks about to jump into Serverless.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps underline>
              Serverless Computing Patterns at Expedia
            </Heading>
            <Text textColor="white">James Hamilton, Vice Pricident & Distinguished Engineer, AWS</Text>
            <Text>------</Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gT9x9LnU_rE" frameborder="0" allowfullscreen></iframe>
            <Text>------</Text>
            <Text textColor="white">Learn from the local guys :-)</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="">
            <List size={1} textColor="white" caps>
              <ListItem>X-Ray</ListItem>
              <ListItem>Elastic GPU</ListItem>
              <ListItem>Custom Scheduling on ECS with BLOX</ListItem>
              <ListItem>Organisations</ListItem>
              <ListItem>Lightsail</ListItem>
              <ListItem>Shield</ListItem>
            </List>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              There's More
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Next Steps
            </Heading>
            <List size={1} textColor="white" caps>
              <ListItem>Serverless</ListItem>
              <ListItem>SPOT</ListItem>
              <ListItem>AWS Organisations</ListItem>
              <ListItem>Re-evaluate Undifferentiated Heavy Lifting</ListItem>
              <ListItem>Might wait it out on Voice Ops</ListItem>
            </List>
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
            <Link href="http://mvillis.github.io/reinvent-2016/">
              <Text margin="20px 0px 0px">http://mvillis.github.io/reinvent-2016/</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={images.snow.replace("/", "")} bgDarken={0.25}>
            <Heading size={1} fit caps textColor="#fd9526">
              Snowmobile!
            </Heading>
            <Text textColor="#fd9526">
              100pb => 26years down to 6 months
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
