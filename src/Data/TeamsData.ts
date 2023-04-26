import { TeamsProps } from "../models/Team";
import Charles from "../assets/images/charles.jpg";
import Fergus from "../assets/images/fergus.jpg";

export const TeamsData: TeamsProps[] = [
  {
    id: 1,
    title: "Founder & Chief Investment Officer",
    name: "Charles Ofori",
    image: Charles,
    responsibility: [
      {
        id: 1,
        title:
          "Responsible for guiding and executing the firm's investment strategy",
      },
      {
        id: 2,
        title:
          "Oversees research, porfolio construction and investment management",
      },
      {
        id: 3,
        title:
          "Established capabilities in decision-making across sectors and cycles",
      },
      {
        id: 4,
        title: "Proven track record managing returns consistently",
      },
    ],
    career: [
      {
        id: 1,
        title:
          "10 years of experience in the equity derivatives trading with Goldman Sachs London",
      },
      {
        id: 2,
        title: `Portfolio Manager with Atlas Capital Markets LLC; integral to the strategy, deal selection
          term sheet negotiation and liquidation, generating stellar returns in 7 years.`,
      },
    ],
  },
  {
    id: 2,
    title: "Chief Commercial Officer",
    name: "Fergus Clarkson",
    image: Fergus,
    responsibility: [
      {
        id: 1,
        title:
          "Oversees operational aspects of the business accounting, all financial function and resources management",
      },
      {
        id: 2,
        title:
          "Responsible for strategic partnerships and fundraising strategy",
      },
      {
        id: 3,
        title: "Investor relations and communications",
      },
      {
        id: 4,
        title:
          "Scale the organisation to grow the firm's capacity to allocate to small businesses",
      },
    ],
    career: [
      {
        id: 1,
        title: "18 years of experience in the investment industry",
      },
      {
        id: 2,
        title: `Previously served as sourcing and structuring multiple financing rounds, and led due
        diligence and negotiations for the sale of the company in 2014 to the Publicis 
        Groupe (PUB.PA)`,
      },
      {
        id: 3,
        title: `Was also Senior Vice President at Goldman Sach’s Wealth Management, developing
        relationships to expand and oversee $1.4 billion in team asset`,
      },
    ],
  },
];
