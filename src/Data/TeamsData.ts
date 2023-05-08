import { TeamsProps } from "../models/Team";
import Charles from "../assets/images/charles.jpg";
import Fergus from "../assets/images/fergus.jpg";

export const TeamsData: TeamsProps[] = [
  {
    id: 1,
    title: "Founder & Chief Investment Officer",
    name: "Charles Ofori",
    image: Charles,
    portfolio: `Previously a portfolio manager at Atlas Capital Markets LLC. Charles was integral to implementing a strategy which generated stellar returns in 7 years at ACM LLC. Prior to ATLAS, Charles worked for 10 years at Goldman Sachs London as an Equity Derivatives trader specialising in single stock delta 1 trading. Charles is responsible for guiding and executing the firm’s investment strategy and will oversee research, portfolio construction and investment management.`,
  },
  {
    id: 2,
    title: "Chief Commercial Officer",
    name: "Fergus Clarkson",
    image: Fergus,
    portfolio: `Previously at Atlas Capital Markets LLC he helped to grow the firm’s presence and deal scope across 
    the UK and other regions. Before joining Atlas in 2022 he was at Makor Securities in London for 
    10 years where he worked as a Sales Trader in Equity Derivatives, FX and Fixed Income. Before 
    that worked for a boutique investment bank specialising in corporate transactions in the 
    small/mid cap space. 
    Fergus is responsible for helping to streamline CLG Capital across deal origination, execution, 
    relations and day to day management of the firm`,
  },
];
