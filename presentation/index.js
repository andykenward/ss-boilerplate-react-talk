// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Link,
  Image,
  Appear,
  CodePane,
  Layout,
  Fill
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

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
  sentry: require("../assets/sentry.svg"),
  compact: require("../assets/eslint-plugin-compat-demo.gif"),
  stylelintExample: require("../assets/stylelint_example.png"),
  yarnLock: require("../assets/yarn-lock.png"),
  yarnUpgrade: require("../assets/yarn-upgrade.png"),
  sentrybefore: require("../assets/sentrybefore.png"),
  sentryafter: require("../assets/sentryafter.png"),
  browserstack: require("../assets/browserstack.svg"),
  typescript: require("../assets/typescript.svg")
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
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        maxHeight="100vh"
      >
        <Slide transition={["fade"]} bgColor="primary">
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
            href="https://github.com/Stinkstudios/boilerplate-react/"
            target="_blank"
          >
            https://github.com/Stinkstudios/boilerplate-react/
          </Link>
          <Text>v2.3.0</Text>
        </Slide>
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
              <Link
                href="https://babeljs.io/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  width="180px"
                  alt="babel"
                  src="https://raw.githubusercontent.com/babel/logo/master/babel.png"
                />
                <Text>Babel</Text>
              </Link>
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
              <Link
                href="https://webpack.js.org/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  width="100px"
                  height="100px"
                  src="https://webpack.js.org/assets/icon-square-big.svg"
                />
                <Text>Webpack 2</Text>
              </Link>
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
              <Link
                href="http://postcss.org/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  width="100px"
                  height="100px"
                  src="http://postcss.github.io/postcss/logo.svg"
                />
                <Text>PostCSS</Text>
              </Link>
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
              <Link
                href="https://facebook.github.io/react/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image alt="React" width="100px" src={images.react} />
                <Text>React</Text>
              </Link>
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
              <Link
                href="http://redux.js.org/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image width="100px" height="100px" src={images.redux} />
                <Text>Redux</Text>
              </Link>
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
              <Link
                href="https://redux-saga.js.org/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image width="100px" src={images.reduxSaga} />
                <Text>Redux-Saga</Text>
              </Link>
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
              <Link
                href="https://github.com/reactjs/reselect"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image width="100px" height="100px" src={images.reselect} />
                <Text>Reselect</Text>
              </Link>
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
              <Link
                href="https://facebook.github.io/immutable-js/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image width="220px" height="100px" src={images.immutable} />
                <Text>Immutable JS</Text>
              </Link>
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
              <Link
                href="http://editorconfig.org/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  width="100px"
                  height="100px"
                  alt="editorconfig logo"
                  src={images.editorconfig}
                />
                <Text>EditorConfig</Text>
              </Link>
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
              <Link
                href="https://github.com/creationix/nvm"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="NVM logo"
                  width="100px"
                  height="100px"
                  src={images.nvm}
                />
                <Text>NVM</Text>
              </Link>
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
              <Link
                href="https://yarnpkg.com/en/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="Yarn Logo"
                  width="100px"
                  height="100px"
                  src={images.yarn}
                />
                <Text>Yarn</Text>
              </Link>
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
              <Link
                href="http://eslint.org/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="EsLint logo"
                  width="100px"
                  height="100px"
                  src={images.eslint}
                />
                <Text>ESLint</Text>
              </Link>
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
              <Link
                href="https://github.com/prettier/prettier"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="Prettier Logo"
                  width="100px"
                  height="100px"
                  src={images.prettier}
                />
                <Text>Prettier</Text>
              </Link>
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
              <Link
                href="https://stylelint.io/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="stylelint logo"
                  width="100px"
                  height="100px"
                  src={images.stylelint}
                />
                <Text>StyleLint</Text>
              </Link>
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
              <Link
                href="https://github.com/morishitter/stylefmt"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="stylefmt logo"
                  width="100px"
                  height="100px"
                  src={images.stylefmt}
                />
                <Text>Stylefmt</Text>
              </Link>
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
              <Link
                href="https://github.com/okonet/lint-staged"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="stylefmt logo"
                  width="100px"
                  height="100px"
                  src={images.lintstaged}
                />
                <Text>Lint-staged</Text>
              </Link>
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
              <Link
                href="https://circleci.com/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="stylefmt logo"
                  width="100px"
                  height="100px"
                  src={images.circleci}
                />
                <Text>CircleCi</Text>
              </Link>
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
              <Link
                href="https://sentry.io/stinkstudios/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  alt="sentry logo"
                  width="100px"
                  height="100px"
                  src={images.sentry}
                />
                <Text>Sentry</Text>
              </Link>
            </ListItem>

          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>Linting</Heading>
        </Slide>
        <Slide>
          <Image
            alt="EsLint logo"
            width="25%"
            height="25%"
            src={images.eslint}
          />
          <Heading size={4}>EsLint</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link
                  target="_blank"
                  href="https://www.npmjs.com/package/eslint-config-airbnb"
                >
                  eslint-config-airbnb
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link
                  target="_blank"
                  href="https://github.com/amilajack/eslint-plugin-compat"
                >
                  eslint-plugin-compat
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link
                  target="_blank"
                  href="https://github.com/evcohen/eslint-plugin-jsx-a11y"
                >
                  eslint-plugin-jsx-a11y
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide height="100vh">
          <Link
            target="_blank"
            href="https://github.com/amilajack/eslint-plugin-compat"
          >
            <Heading size={4}>eslint-plugin-compat</Heading>
          </Link>
          <List>
            <ListItem>Lint browser compatibility of your code</ListItem>
            <ListItem>Configuration via browerslist</ListItem>
            <ListItem>
              Use caniuse and @kangax's compat table for determining coverage
            </ListItem>
          </List>
          <Image src={images.compact} width="50%" />
        </Slide>
        <Slide>
          <Heading size={4}>eslint-plugin-jsx-a11y</Heading>
          <List>
            <ListItem>
              Warns about potential accessibility issues with your React elements
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Image
            alt="StyleLint logo"
            width="25%"
            height="25%"
            src={images.stylelint}
          />
          <Heading size={4}>StyleLint</Heading>
          <List>
            CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets
          </List>
          <Image src={images.stylelintExample} width="100%" />
        </Slide>

        <Slide bgColor="tertiary" maxHeight="100vh">
          <Heading size={2}>Formatting</Heading>
        </Slide>

        <Slide maxHeight="100vh">
          <Image
            alt="Editor Config logo"
            width="15%"
            height="15%"
            src={images.editorconfig}
          />
          <Heading size={4}>EditorConfig</Heading>
        </Slide>

        <Slide maxHeight="100vh">
          <Image
            alt="Prettier logo"
            width="15%"
            height="15%"
            src={images.prettier}
          />
          <Heading size={4}>Prettier</Heading>
          <Text>Javascript formatter</Text>
          <Appear>
            <List>
              <ListItem>Tabs</ListItem>
              <ListItem>Print Width</ListItem>
              <ListItem>Tab Width</ListItem>
              <ListItem>Quotes</ListItem>
              <ListItem>Trailing Commas</ListItem>
              <ListItem>Bracket Spacing</ListItem>
              <ListItem>JSX Brackets on Same Line</ListItem>
              <ListItem>Parser</ListItem>
              <ListItem>Semicolons</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide maxHeight="100vh">
          <Image
            alt="Prettier logo"
            width="15%"
            height="15%"
            src={images.stylefmt}
          />
          <Heading size={4}>Stylefmt</Heading>
          <Text>CSS formatter</Text>
          <Text margin="10% 0 0 0" textSize="1em">
            Automatically formats CSS according to stylelint rules.
          </Text>
        </Slide>

        <Slide maxHeight="100vh">
          <Image
            alt="Lint Staged logo"
            width="15%"
            height="15%"
            src={images.lintstaged}
          />
          <Heading size={4}>Lint-Staged</Heading>
          <Text margin="10% 0 0 0" textSize="1em">
            Run linters against staged git files and don't let 💩 slip into your code base!
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/lintstaged.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide bgColor="tertiary" maxHeight="100vh">
          <Heading size={2}>Dependency Management</Heading>
        </Slide>

        <Slide maxHeight="100vh">
          <Image alt="NVM logo" width="15%" height="15%" src={images.nvm} />
          <Heading size={4}>NVM</Heading>
          <Text>Node Version Manager</Text>
          <Text margin="5% 0 0 0">.nvmrc</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/nvm.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide maxHeight="100vh">
          <Image alt="Yarn Logo" width="25%" height="25%" src={images.yarn} />
          <Heading size={4} textColor="secondary">Yarn</Heading>
          <Heading size={6}>Deterministic</Heading>
          <Text margin="10% 0 0 0 ">
            The same dependencies will be installed the same exact way across every machine regardless of install order.
          </Text>
        </Slide>

        <Slide maxHeight="100vh">
          <Link
            href="https://github.com/Stinkstudios/boilerplate-react/commit/d2ccd0b61f81e237f265929664837719bc5a7549?diff=unified"
            target="_blank"
          >
            frontend/yarn.lock
          </Link>
          <Image width="80%" src={images.yarnLock} />
        </Slide>

        <Slide maxHeight="100vh">
          <Heading size={4} textColor="secondary">
            yarn upgrade-interactive
          </Heading>
          <Image width="80%" src={images.yarnUpgrade} />
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary">
            yarn check --integrity
          </Heading>
          <Text margin="10% 0 0 0 ">
            Verifies that versions and hashed value of the package contents in the project’s package.json matches that of yarn’s lock file. This helps to verify that the package dependencies have not been altered.
          </Text>
        </Slide>

        <Slide bgColor="tertiary" maxHeight="100vh">
          <Heading size={2}>Others</Heading>
        </Slide>

        <Slide maxHeight="100vh">
          <Image
            alt="CircleCi Logo"
            width="25%"
            height="25%"
            src={images.circleci}
          />
          <Heading size={4} textColor="secondary">CircleCi</Heading>
          <Text margin="5% 0 0 0">
            The modern continuous integration and delivery platform
          </Text>
        </Slide>

        <Slide maxHeight="100vh">
          <Image
            alt="Sentry Logo"
            width="25%"
            height="25%"
            src={images.sentry}
          />
          <Heading size={4} textColor="secondary">Sentry</Heading>
          <Text margin="5% 0 0 0">
            Sentry’s real-time error tracking gives you insight into production deployments and information to reproduce and fix crashes.
          </Text>
        </Slide>

        <Slide maxHeight="100vh">
          <Heading size={4} textColor="secondary">
            <Link
              href="https://github.com/40thieves/webpack-sentry-plugin"
              target="_blank"
            >
              webpack-sentry-plugin
            </Link>
          </Heading>
          <Text margin="5% 0 0 0">
            Webpack plugin to upload source maps to Sentry
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/webpack-sentry.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide maxHeight="100vh">
          <Heading size={4} textColor="secondary">No Sourcemaps</Heading>
          <Image width="100%" src={images.sentrybefore} />
        </Slide>

        <Slide maxHeight="100vh">
          <Heading size={4} textColor="secondary">Sourcemaps</Heading>
          <Image width="100%" src={images.sentryafter} />
        </Slide>

        <Slide maxHeight="100vh">
          <Heading size={2}>RoadMap</Heading>
          <Layout
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Appear>
              <Fill
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  width="200px"
                  alt="editorconfig logo"
                  src={images.browserstack}
                />
                <Text>BrowserStack</Text>
                <Text> Selenium Cloud Testing</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Image
                  width="300px"
                  alt="editorconfig logo"
                  src={images.typescript}
                />
                <Text>?</Text>

              </Fill>
            </Appear>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={2}>Thanks</Heading>
          <Appear>
            <Heading size={2}>
              <Link href="https://github.com/Stinkstudios/boilerplate-react/issues">
                GitHub Issues
              </Link>
            </Heading>
          </Appear>
        </Slide>

      </Deck>
    );
  }
}
