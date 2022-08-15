import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import home from "./home";
import projects from "./projects";
import project from "./project";
import projectsPage from "./projectsPage";
import podcast from "./podcast";
import contact from "./contact";
import phGrid from "./phGrid";
import about from "./about";
import banner from "./banner";
import frase from "./frase";
import section from "./section";
import sections from "./sections";
import clients from "./clients";
import row from "./row";
import personalProjects from "./personalProjects";
import personalPage from "./personalPage";
import personal from "./personal";
import listValues from "./listValues";

export default createSchema({
  name: "mySchema",
  types: schemaTypes.concat([
    project,
    projects,
    projectsPage,
    phGrid,
    home,
    podcast,
    about,
    contact,
    banner,
    frase,
    section,
    sections,
    clients,
    row,
    personalProjects,
    personalPage,
    personal,
    listValues
  ]),
});
