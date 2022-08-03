import { groq } from "next-sanity";

export interface projectProps {
  _id: string;
  name: string;
  categories: string;
  featured: boolean;
  slug: string;
  imageUrl: string;
}

export interface homeProps {
  _id: string;
  headerURL: string;
  headerMobileURL: string;
  personalImgURL: string;
}

export interface SectionsProps {
  _id: string;
  name: string;
  hidden: boolean;
  title: string;
  subtitle: string;
  buttonText: string;
  link: string;
  contentPosition: string;
  showContent: boolean;
  backgroundColor: "white" | "black";
  parallax: boolean;
  backgrounds: {
    desktop: {
      url: string;
      metadata: { dimensions: { width: number; height: number } };
    };
    mobile: {
      url: string;
      metadata: { dimensions: { width: number; height: number } };
    };
  };
}

export interface NewGridProps {
  [key: string]: RowsInterface;
}

interface RowsInterface {
  rows: Array<ColumnsInterface>;
}

interface ColumnsInterface {
  columns: Array<ImageInterface>;
}

interface ImageInterface {
  alt: string;
  url: string;
  dimensions: { width: number; height: number };
}

const projectQuery = groq`*[ _type == 'project' ]{
    name,
    _id,
    categories,
    hidden,
    featured,
    slug,
    "imageUrl": img.asset->url,
    'rows': rows[]{columns[]{alt, ...asset->{url, "dimensions": metadata{...dimensions{width, height}}}}},
    _createdAt
  } | order(_createdAt desc)`;

const homeQuery = groq`*[ _type == 'home' ]{
    _id,
    "headerURL": header.asset->url,
    "headerMobileURL": headerMobile.asset->url,
    "personalImgURL": personalImg.asset->url,
  }`;

const sectionsQuery = groq`*[ _type == 'section' ]{
    _id, 
    name,
    title,
    subtitle,
    contentPosition,
    backgroundColor,
    link,
    showContent,
    buttonText,
    parallax,
    hidden,
    "backgrounds": {
      "desktop": backgrounds.desktop_bg.asset->{url, metadata{dimensions{width, height}}}, 
      "mobile": backgrounds.mobile_bg.asset->{url, metadata{dimensions{width, height}}}
    },
    link,
    _createdAt
  } | order(_createdAt desc)`;

const projectPageQuery = groq`*[ _type == 'projectsPage' ]{
    _id,
    "headerURL": header.asset->url,
}`;

const personalQuery = groq`*[ _type == 'personal' ]{
  name,
  _id,
  categories,
  hidden,
  featured,
  slug,
  "imageUrl": img.asset->url,
  'rows': rows[]{columns[]{alt, ...asset->{url, "dimensions": metadata{...dimensions{width, height}}}}},
  _createdAt
} | order(_createdAt desc)`;

const personalPageQuery = groq`*[ _type == 'personalPage' ]{
  _id,
  "headerURL": header.asset->url,
}`;

const gridQuery = groq`*[_type=='phGrid'] {_id, 'assets': pics[].asset->url}`;

const clientsQuery = groq`*[ _type == 'clients' ]{_id,
  "logos": images[]{alt, ...asset->{"imgUrl":url, "dimensions": metadata{...dimensions{width, height}}}}
}`;

export {
  projectQuery,
  homeQuery,
  sectionsQuery,
  projectPageQuery,
  gridQuery,
  clientsQuery,
  personalPageQuery,
  personalQuery,
};
