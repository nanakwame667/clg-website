import { ServicesProps } from "../models/Service";
import Bridge from "../assets/images/bridge.svg";
import Acquisition from "../assets/images/acquisition.svg";
import Receivables from "../assets/images/receivables.svg";
import HighYield from "../assets/images/high-yields.svg";
import Placement from "../assets/images/placements.svg";
import Derivatives from "../assets/images/derivatives.svg";
import fav from "../assets/images/fav.svg";

export const ServicesData: ServicesProps[] = [
  {
    id: 1,
    title: "Bridge Loans",
    text: "CLG Capital provides bridge loan services to help clients manage short-term financial needs during transitional periods. ",
    svg: fav,
  },
  {
    id: 2,
    title: "Acquisition Financing",
    text: "CLG Capital offers acquisition financing to help clients secure funds to acquire businesses, properties, or assets. ",
    svg: fav,
  },
  {
    id: 3,
    title: "Receivables Financing",
    text: " CLG Capital offers receivables financing to help clients access immediate funds by using their accounts receivable as collateral. ",
    svg: fav,
  },
  {
    id: 4,
    title: "High Yield Bonds",
    text: " CLG Capital provides assistance with high yield bonds, which are debt securities that offer higher interest rates due to their higher risk compared to investment-grade bonds. By facilitating the issuance and placement of high yield bonds, the firm helps clients raise capital for various purposes, such as financing growth, acquisitions, or refinancing existing debt.",
    svg: fav,
  },
  {
    id: 5,
    title: "Equity Placements",
    text: "Equity placements are a service offered by CLG Capital in which the firm assists clients in raising capital by issuing and selling new shares of their company to investors. ",
    svg: fav,
  },
  {
    id: 6,
    title: "Equity Derivatives",
    text: "CLG Capital also provides expertise in equity derivatives, which are financial instruments whose value is derived from an underlying equity security, such as stocks or equity indexes. The firm helps clients manage risk, generate income, or gain exposure to specific market segments by structuring, pricing, and executing various equity derivative transactions, including options, futures, swaps, and structured products.",
    svg: fav,
  },
];
