import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language } = item;
    // if lang === null, return {}
    if (!language) return total;
    // if !lang, create lang:1, else lang:++
    if (!total[language]) {
      total[language] = 1;
    } else {
      total[language] = total[language] + 1;
    }
    return total;
  }, {}); // Object { JavaScript: 45, CSS: 38, HTML: 14 }

  const chartData = [
    {
      label: "HTML",
      value: "12",
    },
    {
      label: "CSS",
      value: "37",
    },
    {
      label: "JAVASCRIPT",
      value: "120",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={chartData} />
        {/* <ExampleChart data={chartData} /> */}
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
