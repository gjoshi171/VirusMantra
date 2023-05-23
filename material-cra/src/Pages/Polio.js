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
  title: "Polio",
  description:
    "Vaccination is an important tool in preventing the spread of mpox." ,
  image:
    "https://www.cdc.gov/polio/what-is-polio/images/polio_virus.jpg?_=37886",
  // imageText: "main image description",
  // linkText: "Continue reading…",
};

const theme = createTheme();

export default function MonkeyPox() {
  const [post1, setPost1] = React.useState("");

  React.useEffect(() => {
    const readmePath = require("../Assets/blog-post.5.md");
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
            <Main title="What is Polio Disease" posts={posts} />
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
