import "./styles.css";
import "ninja-keys";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const ninjaKeys = useRef(null);
  const [ninjaLoaded, setLoaded] = useState(false);
  const groups = {};
  const hotkeys = [];
  TOP_LEVEL.forEach((row) => {
    const topLevel = row[0];
    const issue = row[1];
    const id = row[2];
    hotkeys.push({
      id: topLevel + issue,
      title: `${topLevel} / ${issue}`,
      handler: function () {
        window.open(
          `https://vendorcentral.amazon.com/hz/vendor/members/contact?expandId=${id}`,
          "_blank"
        );
      }
    });
    if (groups[row[0]]) {
      groups[topLevel].push({ issue, id });
    } else {
      groups[topLevel] = [{ issue, id }];
    }
  });

  useEffect(() => {
    if (ninjaKeys.current) {
      ninjaKeys.current.data = hotkeys;
      setLoaded(true);
    }
  }, []);

  return (
    <div>
      <header className="App">
        <h1>CONTACT US - CheatSheet</h1>
        {ninjaLoaded && <h2>Hit "Cmd+K" or "Ctrl+K"</h2>}
        <h2>Automatically jump to VendorCentral</h2>
      </header>
      <ul>
        {Object.keys(groups).map((toplevel, index) => {
          const issues = groups[toplevel];

          return (
            <li key={toplevel}>
              <h3 style={{ marginBottom: 0, display: "inline-block" }}>
                {toplevel}
              </h3>
              <ul>
                {issues.map(({ issue, id }) => {
                  return (
                    <li key={id + issue}>
                      <a
                        href={`https://vendorcentral.amazon.com/hz/vendor/members/contact?expandId=${id}`}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        {issue}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      <textarea
        className="form-control"
        readOnly
        rows={1000}
        value={JSON.stringify(hotkeys, null, 2)}
      />

      <ninja-keys ref={ninjaKeys}></ninja-keys>
    </div>
  );
}

// VISIT https://vendorcentral.amazon.com/hz/vendor/members/contact?expandId=1000312
// [...document.querySelectorAll("[id*='vss-contact-sub-issue-id-']")].map((el) => [el.parentElement.parentElement.previousElementSibling.innerText, el.innerText, el.id.split("-id-")[1]] )

const TOP_LEVEL = [
  ["Amazon Packaging Certification", "Enroll and Certify ASINs", "4239273"],
  [
    "Amazon Packaging Certification",
    "Other Packaging Certification Questions",
    "4239473"
  ],
  [
    "Amazon Packaging Certification",
    "Portfolio Certification Status Update",
    "4239373"
  ],
  ["API Integration", "API Services", "4297973"],
  ["API Integration", "Registration and access", "4298073"],
  ["Born to Run (BTR)", "Born to Run (BTR)", "4273973"],
  ["Direct Fulfillment", "Carrier & Transportation Inquiries", "1000429"],
  ["Direct Fulfillment", "EDI issues", "1638974478424"],
  [
    "Direct Fulfillment",
    "Inventory, Item Availability & Catalog Updates",
    "4250273"
  ],
  ["Direct Fulfillment", "Invoice Submission & Payment Issues", "1000502"],
  ["Direct Fulfillment", "Order Management & Labeling", "1000845"],
  ["Direct Fulfillment", "Performance, Metrics & Lead time", "1000909"],
  ["Direct Fulfillment", "Settings & Account Management", "1000651"],
  ["EDI Integration", "EDI Integration Inquiries", "4373673"],
  [
    "EDI Integration",
    "EDI Live - PO Inquires & Transmission Errors",
    "1000838"
  ],
  ["Manage My Catalog", "ACFF Feeds", "1000203"],
  ["Manage My Catalog", "Browse Node / Categorization Update", "4373773"],
  [
    "Manage My Catalog",
    "Climate Pledge Friendly / Compact by Design",
    "4369673"
  ],
  ["Manage My Catalog", "Cost Price Inquiries", "1000419"],
  [
    "Manage My Catalog",
    "Detail Page Issues (Buy Box, Customer Reviews)",
    "1000203"
  ],
  ["Manage My Catalog", "GDSN Feeds", "1623087171449"],
  ["Manage My Catalog", "Image Inquiries", "1000514"],
  ["Manage My Catalog", "Item Availability", "1000273"],
  ["Manage My Catalog", "Item Detail Edit", "1000314"],
  [
    "Manage My Catalog",
    "Item ID Update (EAN, SKU, UPC, Model #, ISBN)",
    "4373873"
  ],
  ["Manage My Catalog", "New Item Setup", "1000768"],
  ["Manage My Catalog", "PDF / A+ Content", "1000538"],
  [
    "Manage My Catalog",
    "Product Linking (Variations, Twister, Newer Version, Duplicates, Edition, Titleset)",
    "1000206"
  ],
  ["Manage My Catalog", "Publicity/Forecasting (SDQ)", "4373973"],
  ["Manage My Catalog", "Video upload issues", "1000389"],
  ["Operational performance (chargebacks)", "Accuracy: ASN", "1626978436327"],
  [
    "Operational performance (chargebacks)",
    "Accuracy: PO On-time",
    "1626978446117"
  ],
  [
    "Operational performance (chargebacks)",
    "Add/Remove - prep requirement",
    "1626978455023"
  ],
  [
    "Operational performance (chargebacks)",
    "Carton content label",
    "1626978464405"
  ],
  [
    "Operational performance (chargebacks)",
    "Miscellaneous (all other chargebacks)",
    "1000823"
  ],
  ["Other Assistance & Feedback", "Amazon Brand Registry", "4373073"],
  ["Other Assistance & Feedback", "Amazon Business", "4373173"],
  ["Other Assistance & Feedback", "Suggestions & Feedback", "4373273"],
  ["Payments", "Audit Claim (APAUDIT, IPAP, RSS & AUDCNLY)", "4372373"],
  ["Payments", "Bank Information Update", "1000809"],
  [
    "Payments",
    "Co-Op / Vendor Returns VRET (VRET) / Freight Cost Issues ​​",
    "1000851"
  ],
  ["Payments", "Credit note creation, submission, and status", "1635963593800"],
  ["Payments", "Invoice cancellation and reinstatement", "1635968058008"],
  ["Payments", "Invoice Creation / Status / Submission", "1000865"],
  ["Payments", "Payment Received / Debit Balance Inquiries", "1000802"],
  ["Payments", "Price Claim (PC)", "1000796"],
  ["Payments", "Provision for Receivables / Missing Actuals", "4372473"],
  ["Payments", "Shortage Claim (SC) / Pay-on-Receipt (POR)", "1000771"],
  ["Payments", "Statement of Open Items Submission", "4372573"],
  ["Product Compliance", "Amazon Compliance Connections (ACC)", "1000278"],
  ["Product Compliance", "ASIN Reinstatement Requests", "4298573"],
  ["Product Compliance", "California Proposition 65 Warnings", "4249373"],
  ["Product Compliance", "Dangerous Goods (Hazmat) Inquiries", "4216573"],
  ["Product Compliance", "Direct Import Questions", "1000315"],
  ["Product Compliance", "MVP (Manufacturer Validation Program)", "4206073"],
  [
    "Product Compliance",
    "North America Selection Policy Submissions",
    "1000847"
  ],
  ["Product Compliance", "Product Recall", "1000814"],
  ["Product Compliance", "Report a Non-Compliant ASIN", "4221673"],
  ["Product Compliance", "Request Inspection - Direct Import", "1000734"],
  ["Product Compliance", "Request Inspection - Private Label", "1000054"],
  ["Product Compliance", "SDS and Exemption Sheets submissions", "4215773"],
  ["Product Compliance", "Submit Lithium Battery Testing Summary", "4293573"],
  [
    "Product Compliance",
    "Worldwide Inventory Transfer (WWIT) Questions",
    "1630426139829"
  ],
  ["Promotions and Marketing", "Amazon Ads", "4373373"],
  ["Promotions and Marketing", "Amazon VINE", "4373573"],
  ["Promotions and Marketing", "CoOp General Questions", "1000731"],
  ["Promotions and Marketing", "Promotions Inquiries", "4373473"],
  ["Purchase Orders", "Availability correction", "1000169"],
  ["Purchase Orders", "Bulk Buys / Request for Quote", "1000829"],
  ["Purchase Orders", "Case Pack Quantity Update", "1000085"],
  ["Purchase Orders", "Item correction (title, UPC, model #, etc.)", "1000867"],
  ["Purchase Orders", "Publicity/Forecasting (SDQ)", "4374173"],
  ["Purchase Orders", "Purchase Order Management", "1000170"],
  [
    "Reports - Amazon Retail Analytics or Brand Analytics",
    "Report Inquiries & Troubleshooting",
    "1000855"
  ],
  ["Settings and Account Management", "Account Settings", "1000118"],
  [
    "Settings and Account Management",
    "Technical Issues & Error Messages",
    "4374273"
  ],
  ["Settings and Account Management", "Terms & Conditions", "1000081"],
  ["Settings and Account Management", "Two-Step Verification", "4212973"],
  ["Shipments", "Advanced Shipment Notification (ASN)", "4372673"],
  ["Shipments", "Carrier Missed Pick Up (Collect)", "1000123"],
  ["Shipments", "Direct Import Booking on Vendor Central", "4383173"],
  [
    "Shipments",
    "Direct Import Origin Logistics Issue (non-Domestic only)",
    "1624633191588"
  ],
  ["Shipments", "International Shipment Issues", "4372773"],
  ["Shipments", "Issue with Creating a Routing Request", "1633459447702"],
  ["Shipments", "Misreceive or Rejected Delivery", "4372873"],
  ["Shipments", "Modify Collect Shipments", "1631733413541"],
  ["Shipments", "Pending Carrier Assignment (Collect)", "1000869"],
  [
    "Shipments",
    "Warehouse Delivery Appointment & Carrier Central (CARP)",
    "1000122"
  ]
];
