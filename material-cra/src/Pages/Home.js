import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Components/Header";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
          <Typography component="span" variant="body2" sx={{ fontWeight: 'bold' }}>
          Virus Mantra
        </Typography>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const diseases = [
  {
    name: "Monkey Pox",
    route: "",
    info: "The monkeypox virus is an orthopoxvirus that causes mpox (monkeypox), a disease with symptoms similar to smallpox, although less severe. While smallpox was eradicated in 1980, mpox continues to occur in countries of central and west Africa. Since May 2022, cases have also been reported from countries without previously documented mpox transmission outside the African region. Two distinct clades of the monkeypox virus have been identified: Clade I (previously known as the Congo Basin (central African) clade and Clade II (the former west African clade).",
    image: "https://www.cdc.gov/poxvirus/mpox/images/home-prevent.jpg?_=82729",
  },
  {
    name: "Covid 19",
    route: "",
    info: "Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.",
    image: "https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1366v.jpg?sfvrsn=4dba955c_12%201366w",
  },
  {
    name: "Swine flu",
    route: "",
    info: "The H1N1 flu, sometimes called swine flu, is a type of influenza A virus. During the 2009-10 flu season, a new H1N1 virus began causing illness in humans. It was often called swine flu and was a new combination of influenza viruses that infect pigs, birds and humans.",
    image:
      "https://www.cdc.gov/H1N1flu/images/3D_Influenza/3D_Influenza_blue_no_key_full_lrg2.jpg",
  },
  {
    name: "Ebola",
    route: "",
    info: "Ebola virus disease (EVD) is a deadly disease with occasional outbreaks that occur mostly on the African continent. EVD most commonly affects people and nonhuman primates (such as monkeys, gorillas, and chimpanzees).",
    image: "https://www.cdc.gov/dotw/ebola/images/main_928px.jpg?_=87458",
  },
  {
    name: "Polio",
    route: "",
    info: "Polio, or poliomyelitis, is a disabling and life-threatening disease caused by the poliovirus. The virus spreads from person to person and can infect a person's spinal cord, causing paralysis (can't move parts of the body).",
    image: "https://www.cdc.gov/polio/what-is-polio/images/polio_virus.jpg?_=37886",
  },
  {
    name: "Chicken Pox",
    route: "",
    info: "Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV). It can cause an itchy, blister-like rash among other symptoms. The rash first appears on the chest, back, and face, and then spreads over the entire body.",
    image:
      "https://media.istockphoto.com/id/1253218186/photo/varicella-zoster-or-chickenpox-virus.jpg?s=2048x2048&w=is&k=20&c=HHp5ERbs7HFIDYiT6QRZBZpgiV48mNk0Dp2tgX2USbE=",
  },
  
  {
    name: "Rabies",
    route: "",
    info: "Rabies is a fatal but preventable viral disease. It can spread to people and pets if they are bitten or scratched by a rabid animal. In the United States, rabies is mostly found in wild animals like bats, raccoons, skunks, and foxes.",
    image:
      "https://www.woodtv.com/wp-content/uploads/sites/51/2016/08/cdc-rabies_38518306_ver1.0.jpg?w=650",
  },
  {
    name: "Tuberculosis",
    route: "",
    info: "Tuberculosis (TB) is an infectious disease that most often affects the lungs and is caused by a type of bacteria. It spreads through the air when infected people cough, sneeze or spit. Tuberculosis is preventable and curable. About a quarter of the global population is estimated to have been infected with TB bacteria.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEKWCFww_o3lZ9uyVCM1SJYRZkB9rDVy-zA&usqp=CAU",
  },
  {
    name: "HIV",
    route: "",
    info: "HIV (human immunodeficiency virus) is a virus that attacks the body's immune system. If HIV is not treated, it can lead to AIDS (acquired immunodeficiency syndrome). There is currently no effective cure. Once people get HIV, they have it for life. But with proper medical care, HIV can be controlled.",
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321803/hiv-virus-in-pink.jpg",
  },
];

const theme = createTheme();

export default function Home() {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Header title="Virus Mantra" />
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <strong>Virus mantra</strong>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              We provide the information on diseases and outbreak's, you can
              check symptoms, treatment all details on our site, You can also
              avail our feature to find plasma in case of emergency treatment.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                onClick={() => history.push("/plasma")}
              >
                Find Plasma / Donate Plasma
              </Button>
              <Button
                variant="outlined"
                onClick={
                  () => history.push("/statistics")
                  // window.location.replace(
                  //   "https://app.powerbi.com/view?r=eyJrIjoiNjljOTY0ZDYtMzczZS00MWNhLWE1ODAtZWY0ZDY3YWQ5Y2QxIiwidCI6IjNkOGE4NjQwLTE1YzYtNDk1NS05MTc4LTlhNjEzYTk4ZDNjYSJ9&pageName=ReportSectionced8bfebcec9c0b3a510"
                  // )
                }
              >
                Statistics
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xm ">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {diseases.map((disease) => (
              <Grid item key={disease} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={disease.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {disease.name}
                    </Typography>
                    <Typography>{disease.info}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => history.push("/monkeyPox")}
                    >
                      More info ...
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
