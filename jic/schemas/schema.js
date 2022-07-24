import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import home from "./home";
import projects from "./projects";
import project from "./project";
import projectsPage from "./projectsPage";
import podcast from "./podcast";
import contact from "./contact";
import phGrid from "./phGrid";
import youtube from "./youtube";
import about from "./about";
import banner from "./banner";
import manifiesto from "./manifiesto";
import frase from "./frase";
import section from "./section";
import sections from "./sections";
import clients from "./clients";
import row from "./row";

export default createSchema({
  name: "mySchema",
  types: schemaTypes.concat([
    project,
    projects,
    projectsPage,
    phGrid,
    home,
    youtube,
    podcast,
    about,
    contact,
    banner,
    manifiesto,
    frase,
    section,
    sections,
    clients,
    row
  ]),
});
