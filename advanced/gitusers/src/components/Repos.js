import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2d } from "./Charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  // stars, forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = {
        label: name,
        value: stargazers_count,
      };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  /* 
  
  {
  "0": {
    "label": "react-timestamp-app",
    "value": 0
  },
  "1": {
    "label": "react-third-project-todo-list",
    "value": 1
  },
  "2": {
    "label": "react-project5-portfolio",
    "value": 2
  },
  "3": {
    "label": "redux-tutorial-simple-counter",
    "value": 3
  },
  "4": {
    "label": "react-revised-recipe-application",
    "value": 4
  },
  "5": {
    "label": "react-udemy-vintage-tech-extra-fetures",
    "value": 5
  },
  "6": {
    "label": "react-person-list-project",
    "value": 6
  },
  "7": {
    "label": "react-recipe-search-project",
    "value": 7
  },
  "8": {
    "label": "react-city-tours-project",
    "value": 8
  },
  "9": {
    "label": "gatsby-personal-site-2019-starter",
    "value": 9
  },
  "10": {
    "label": "gatsby-tutorial-2020",
    "value": 10
  },
  "11": {
    "label": "redux-tutorial-cart",
    "value": 11
  },
  "13": {
    "label": "gatsby-strapi-portfolio-site-2020",
    "value": 13
  },
  "15": {
    "label": "html-css-grid-project-recording",
    "value": 15
  },
  "17": {
    "label": "react-hooks-budged-calculator-app",
    "value": 17
  },
  "59": {
    "label": "js-cart-setup",
    "value": 59
  },
  "79": {
    "label": "react-phone-e-commerce-project",
    "value": 79
  },
  "127": {
    "label": "react-beach-resort-project",
    "value": 127
  },
  "206": {
    "label": "javascript-basic-projects",
    "value": 206
  }
}
  */

  // array instead object
  // stars = Object.values(stars).slice(-5);
  // console.log("stars>>", stars);

  /* 
  [
  {
    "label": "react-timestamp-app",
    "value": 0
  },
  {
    "label": "react-third-project-todo-list",
    "value": 1
  },
  {
    "label": "react-project5-portfolio",
    "value": 2
  },
  {
    "label": "redux-tutorial-simple-counter",
    "value": 3
  },
  {
    "label": "react-revised-recipe-application",
    "value": 4
  },
  {
    "label": "react-udemy-vintage-tech-extra-fetures",
    "value": 5
  },
  {
    "label": "react-person-list-project",
    "value": 6
  },
  {
    "label": "react-recipe-search-project",
    "value": 7
  },
  {
    "label": "react-city-tours-project",
    "value": 8
  },
  {
    "label": "gatsby-personal-site-2019-starter",
    "value": 9
  },
  {
    "label": "gatsby-tutorial-2020",
    "value": 10
  },
  {
    "label": "redux-tutorial-cart",
    "value": 11
  },
  {
    "label": "gatsby-strapi-portfolio-site-2020",
    "value": 13
  },
  {
    "label": "html-css-grid-project-recording",
    "value": 15
  },
  {
    "label": "react-hooks-budged-calculator-app",
    "value": 17
  },
  {
    "label": "js-cart-setup",
    "value": 59
  },
  {
    "label": "react-phone-e-commerce-project",
    "value": 79
  },
  {
    "label": "react-beach-resort-project",
    "value": 127
  },
  {
    "label": "javascript-basic-projects",
    "value": 206
  }
]
  */

  // stars = Object.values(stars).slice(-5);
  // console.log("stars>>", stars);

  /* 
    Last 5 most stars...
[
  {
    "label": "react-hooks-budged-calculator-app",
    "value": 17
  },
  {
    "label": "js-cart-setup",
    "value": 59
  },
  {
    "label": "react-phone-e-commerce-project",
    "value": 79
  },
  {
    "label": "react-beach-resort-project",
    "value": 127
  },
  {
    "label": "javascript-basic-projects",
    "value": 206
  }
]

  */

  stars = Object.values(stars).slice(-5).reverse();
  console.log("stars>>", stars);

  /* 

[
  {
    "label": "javascript-basic-projects",
    "value": 206
  },
  {
    "label": "react-beach-resort-project",
    "value": 127
  },
  {
    "label": "react-phone-e-commerce-project",
    "value": 79
  },
  {
    "label": "js-cart-setup",
    "value": 59
  },
  {
    "label": "react-hooks-budged-calculator-app",
    "value": 17
  }
]


  */

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2d data={mostPopular} />
        <Bar3D data={mostUsed} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
