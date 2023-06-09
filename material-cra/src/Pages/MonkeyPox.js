import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../Components/MainFeaturedPost";
import Header from "../Components/Header";
import FeaturedPost from "../Components/FeaturedPost";
import Main from "../Components/Main";

import Sidebar from "../Components/Sidebar";

const mainFeaturedPost = {
  title: "Monkey Pox",
  // description:
  //   "Vaccination is an important tool in preventing the spread of mpox. Find out if you are eligible to get vaccinated and where vaccine is available in your area.",
  image:
    "https://images.hindustantimes.com/img/2022/07/14/1600x900/HEALTH-MONKEYPOX--2_1657811796037_1657811796037_1657811814900_1657811814900.JPG",
  // imageText: "main image description",
  // linkText: "Continue reading…",
};

// const featuredPosts = [
//   {
//     title: "Featured post",
//     date: "Nov 12",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random/?blog/",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random/?blog/",
//     imageLabel: "Image Text",
//   },
// ];

// const sidebar = {
//   title: "About",
//   description:
//     "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
//   archives: [
//     { title: "March 2020", url: "#" },
//     { title: "February 2020", url: "#" },
//     { title: "January 2020", url: "#" },
//     { title: "November 1999", url: "#" },
//     { title: "October 1999", url: "#" },
//     { title: "September 1999", url: "#" },
//     { title: "August 1999", url: "#" },
//     { title: "July 1999", url: "#" },
//     { title: "June 1999", url: "#" },
//     { title: "May 1999", url: "#" },
//     { title: "April 1999", url: "#" },
//   ],
//   social: [
//     { name: "GitHub", icon: GitHubIcon },
//     { name: "Twitter", icon: TwitterIcon },
//     { name: "Facebook", icon: FacebookIcon },
//   ],
// };

const theme = createTheme();

export default function MonkeyPox() {
  const [post1, setPost1] = React.useState("");

  React.useEffect(() => {
    const readmePath = require("../Assets/blog-post.1.md");
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setPost1(text);
      });
  }, []);

  const posts = [post1];

  return (
    <ThemeProvider theme={theme}>
      <Header title="Virus Mantra" />
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {/* {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="What is MonkeyPox Disease" posts={posts} />
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}
