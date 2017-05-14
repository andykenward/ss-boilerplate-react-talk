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
  TableBody
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
  redux: require("../assets/redux.svg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Stink Studios
          </Heading>
          <Heading margin="0 0 50px 0" size={2} fit caps>
            Boilerplate React
          </Heading>
          <Link textColor="tertiary" size={1} fit bold href=" https://github.com/Stinkstudios/boilerplate-react/" target="_blank">
            https://github.com/Stinkstudios/boilerplate-react/
          </Link>
        </Slide>
        <Slide>
          <Table>
  <TableHeader>
    <TableRow>
      <TableHeaderItem></TableHeaderItem>
      <TableHeaderItem>2011</TableHeaderItem>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableItem>None</TableItem>
      <TableItem><Image alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="546" /></TableItem>
    </TableRow>
    <TableRow>
      <TableItem>jQuery</TableItem>
      <TableItem>28.3%</TableItem>
    </TableRow>
  </TableBody>
</Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary">Core Libraries</Heading>
          <Image alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="546" />
          <Image width="200" heigth="200" src="https://webpack.js.org/assets/icon-square-big.svg" />
          <Image width="95" height="95" src="http://postcss.github.io/postcss/logo.svg" />
          <Image width="95" height="95" src={images.redux} />
          
          
          
          <ListItem size={6} textColor="secondary">PostCSS</ListItem>
          <ListItem size={6} textColor="secondary">React</ListItem>
          <ListItem size={6} textColor="secondary">Redux</ListItem>
          <ListItem size={6} textColor="secondary">Redux-Saga</ListItem>
          <ListItem size={6} textColor="secondary">Reselect</ListItem>
          <ListItem size={6} textColor="secondary">Immutable JS</ListItem>
          
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Tools</Heading>
          <List>
            <ListItem>NVM</ListItem>
            <ListItem>Yarn</ListItem>
            <ListItem>ESLint</ListItem>
            <ListItem>Prettier</ListItem>
            <ListItem>Stylelint</ListItem>
            <ListItem>Stylefmt</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
