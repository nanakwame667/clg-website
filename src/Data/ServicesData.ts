import { ServicesProps } from "../models/Service";
import Bridge from "../assets/images/bridge.svg";
import Acquisition from "../assets/images/acquisition.svg";
import Receivables from "../assets/images/receivables.svg";
import HighYield from "../assets/images/high-yields.svg";
import Placement from "../assets/images/placements.svg";
import Derivatives from "../assets/images/derivatives.svg";

export const ServicesData: ServicesProps[] = [
  {
    id: 1,
    title: "Bridge Loans",
    text: "CLG Capital provides bridge loan services to help clients manage short-term financial needs during transitional periods. These loans have higher interest rates and shorter repayment periods, but allow clients to bridge financial gaps and facilitate smooth transitions between transactions or events. They are tailored to each client's unique situation and have flexible terms.",
    svg: Bridge,
  },
  {
    id: 2,
    title: "Acquisition Financing",
    text: "CLG Capital offers acquisition financing to help clients secure funds to acquire businesses, properties, or assets. It is tailored to the specific needs of each client, taking into account factors such as size, industry, and financial health. This service enables clients to strategically grow their businesses or investment portfolios through well-planned and well-funded acquisitions.",
    svg: Acquisition,
  },
  {
    id: 3,
    title: "Receivables Financing",
    text: " CLG Capital offers receivables financing to help clients access immediate funds by using their accounts receivable as collateral. This financing solution improves cash flow and working capital management, enabling businesses to meet operational expenses and invest in growth opportunities without waiting for customers to pay their invoices.",
    svg: Receivables,
  },
  {
    id: 4,
    title: "High Yield Bonds",
    text: " CLG Capital provides assistance with high yield bonds, which are debt securities that offer higher interest rates due to their higher risk compared to investment-grade bonds. By facilitating the issuance and placement of high yield bonds, the firm helps clients raise capital for various purposes, such as financing growth, acquisitions, or refinancing existing debt.",
    svg: HighYield,
  },
  {
    id: 5,
    title: "Equity Placements",
    text: "Equity placements are a service offered by CLG Capital in which the firm assists clients in raising capital by issuing and selling new shares of their company to investors. This service enables clients to secure funding for growth, acquisitions, or other strategic initiatives, while optimizing the terms and minimizing dilution for existing shareholders.",
    svg: Placement,
  },
  {
    id: 6,
    title: "Equity Derivatives",
    text: "CLG Capital also provides expertise in equity derivatives, which are financial instruments whose value is derived from an underlying equity security, such as stocks or equity indexes. The firm helps clients manage risk, generate income, or gain exposure to specific market segments by structuring, pricing, and executing various equity derivative transactions, including options, futures, swaps, and structured products.",
    svg: Derivatives,
  },
];
