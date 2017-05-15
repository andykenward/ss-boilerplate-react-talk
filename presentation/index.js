// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Image,
  Table,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem,
  TableBody,
  Appear,
  Fill
} from "spectacle";

import Terminal from "spectacle-terminal";
import Typist from "react-typist";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/react.svg"),
  redux: require("../assets/redux.svg"),
  reduxSaga: require("../assets/redux-saga-logo.png"),
  immutable: require("../assets/immutable.svg"),
  reselect: require("../assets/reselect.png"),
  editorconfig: require("../assets/editorconfig.png"),
  nvm: require("../assets/nvm.jpg"),
  yarn: require("../assets/yarn.svg"),
  eslint: require("../assets/eslint.svg"),
  prettier: require("../assets/prettier-avatar-dark.png"),
  stylelint: require("../assets/stylelint.svg"),
  stylefmt: require("../assets/stylefmt.svg"),
  circleci: require("../assets/circleci.svg"),
  lintstaged: require("../assets/lintstaged.jpg"),
  sentry: require("../assets/sentry.svg")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Stink Studios
          </Heading>
          <Heading margin="0 0 50px 0" size={2} fit caps>
            Boilerplate React
          </Heading>
          <Link
            textColor="tertiary"
            size={1}
            fit
            bold
            href=" https://github.com/Stinkstudios/boilerplate-react/"
            target="_blank"
          >
            https://github.com/Stinkstudios/boilerplate-react/
          </Link>
        </Slide>
        {/*<Slide>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>2011</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>None</TableItem>
                <TableItem>
                  <Image
                    alt="babel"
                    src="https://raw.githubusercontent.com/babel/logo/master/babel.png"
                    width="546"
                  />
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>jQuery</TableItem>
                <TableItem>28.3%</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>*/}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary">Core</Heading>
          <List
            type="none"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                width="180px"
                alt="babel"
                src="https://raw.githubusercontent.com/babel/logo/master/babel.png"
              />
              <Text>Babel</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                width="100px"
                height="100px"
                src="https://webpack.js.org/assets/icon-square-big.svg"
              />
              <Text>Webpack 2</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                width="100px"
                height="100px"
                src="http://postcss.github.io/postcss/logo.svg"
              />
              <Text>PostCSS</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image alt="React" width="100px" src={images.react} />
              <Text>React</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image width="100px" height="100px" src={images.redux} />
              <Text>Redux</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image width="100px" src={images.reduxSaga} />
              <Text>Redux-Saga</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image width="100px" height="100px" src={images.reselect} />
              <Text>Reselect</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image width="220px" height="100px" src={images.immutable} />
              <Text>Immutable JS</Text>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">Tools</Heading>
          <List
            type="none"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                width="100px"
                height="100px"
                alt="editorconfig logo"
                src={images.editorconfig}
              />
              <Text>EditorConfig</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="NVM logo"
                width="100px"
                height="100px"
                src={images.nvm}
              />
              <Text>NVM</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="Yarn Logo"
                width="100px"
                height="100px"
                src={images.yarn}
              />
              <Text>Yarn</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="EsLint logo"
                width="100px"
                height="100px"
                src={images.eslint}
              />
              <Text>ESLint</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="Prettier Logo"
                width="100px"
                height="100px"
                src={images.prettier}
              />
              <Text>Prettier</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="stylelint logo"
                width="100px"
                height="100px"
                src={images.stylelint}
              />
              <Text>StyleLint</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="stylefmt logo"
                width="100px"
                height="100px"
                src={images.stylefmt}
              />
              <Text>Stylefmt</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="stylefmt logo"
                width="100px"
                height="100px"
                src={images.lintstaged}
              />
              <Text>Lint-staged</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="stylefmt logo"
                width="100px"
                height="100px"
                src={images.circleci}
              />
              <Text>CircleCi</Text>
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minWidth: "25%",
                marginBottom: "5%"
              }}
              size={4}
              textColor="secondary"
            >
              <Image
                alt="stylefmt logo"
                width="100px"
                height="100px"
                src={images.sentry}
              />
              <Text>Sentry</Text>
            </ListItem>

          </List>
        </Slide>
        <Slide transition={["fade"]}>

          <Image alt="Yarn Logo" width="25%" height="25%" src={images.yarn} />

          <Appear>
            <Heading size={4} textColor="secondary">Yarn</Heading>
          </Appear>
          <Appear><Heading size={6}>Deterministic</Heading></Appear>
          <Appear>
            <Text>
              The same dependencies will be installed the same exact way across every machine regardless of install order.
            </Text>
          </Appear>

        </Slide>
        <Slide transition={["fade"]}>
          <Terminal
            title="1. elijahm@elijahm: ~(zsh)"
            output={[
              <Typist key="t1" cursor={cursor}>yarn upgrade-interactive</Typist>,
              <Typist key="t1" cursor={cursor}>yarn upgrade-interactive v0.24.4</Typist>,
              <div style={{ color: "#33B969" }}>TOTAL: 174 SUCCESS</div>,
              <div>
                <div>
                  =============================== Coverage summary ===============================
                </div>
                <div style={{ color: "#DEC612" }}>
                  Statements   : 51.29% ( 278/542 )
                </div>
                <div style={{ color: "#EE5057" }}>
                  Branches     : 38.78% ( 95/245 )
                </div>
                <div style={{ color: "#EE5057" }}>
                  Functions    : 46.21% ( 61/132 )
                </div>
                <div style={{ color: "#DEC612" }}>
                  Lines        : 52.69% ( 274/520 )
                </div>
                <div>
                  ================================================================================
                </div>
              </div>
            ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide />
      </Deck>
    );
  }
}
