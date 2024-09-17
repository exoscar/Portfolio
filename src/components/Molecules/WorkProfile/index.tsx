import React, { useState } from "react";
import PTypography from "../../atoms/PTypography";
import { ArrowRight } from "@mui/icons-material";
import {
  WorkProfileContainer,
  ListOptionContainer,
  JobDescriptionContainer,
} from "./style";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useMediaQuery } from "@mui/material";

interface ListOptionProps {
  title: string;
  selected?: boolean;
  onClick: () => void;
}

interface JobDescriptionProps {
  points: string[];
}

const ListOption: React.FC<ListOptionProps> = ({
  title,
  selected,
  onClick,
}) => {
  return (
    <ListOptionContainer onClick={onClick}>
      <div
        className={`${selected ? "selected vertical-line" : "vertical-line"}`}
      ></div>
      <div className="company-name">
        <PTypography
          className={`${
            selected ? "selected-name company-name" : "company-name"
          }`}
        >
          {title}
        </PTypography>
      </div>
    </ListOptionContainer>
  );
};

const JobDescriptionBullets: React.FC<JobDescriptionProps> = ({ points }) => {
  return (
    <JobDescriptionContainer>
      {points.map((point) => (
        <div className="point">
          <ArrowRight color="secondary" />
          <PTypography className="text">{point}</PTypography>
        </div>
      ))}
    </JobDescriptionContainer>
  );
};

export const WorkProfile = () => {
  const companyNames = ["PossibleWorks", "Aspire InfoLabs"];
  const [selectedCompany, setSelectedCompany] =
    useState<string>("PossibleWorks");

  const handleOptionClick = (companyName: string) => {
    setSelectedCompany(companyName);
  };

  const companyDetails: {
    [key: string]: { role?: string; duration?: string; points: string[] };
  } = {
    PossibleWorks: {
      role: "Software Associate Intern",
      duration: "Jan 2024 - Jun 2024",
      points: [
        "Implemented a performance management system using OKR and Balanced Scorecard methodologies to improve goal alignment and foster continuous improvement with structured feedback.",
        "Utilized TypeScript, ReactJS, WebSocket, PostgreSQL, and NodeJS to create a platform for real-time performance tracking and evaluation for individuals and teams.",
        "Built a strong proficiency in web application development, focusing on crafting interactive and responsive user interfaces with ReactJS to enhance user experience",
      ],
    },
    "Aspire InfoLabs": {
      role: "UI Developer Intern",
      duration: "May 2023 - Jun 2023",
      points: [
        "Developed a student networking website for Aspire Info Labs using React, integrating features such as achievement posting, student networking, and real time chatting capabilities.",
        "Acquired comprehensive understanding of the professional web development practices during this project.",
      ],
    },
  };

  const [expanded, setExpanded] = useState<string | false>(
    Object.keys(companyDetails)[0]
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const isMobile = useMediaQuery("(max-width:760px)");

  return (
    <WorkProfileContainer>
      <PTypography className="title">My Professional Journey</PTypography>
      {!isMobile ? (
        <div className="work-content">
          <div className="job-list">
            {companyNames.map((companyName) => (
              <ListOption
                key={companyName}
                title={companyName}
                selected={companyName === selectedCompany}
                onClick={() => handleOptionClick(companyName)}
              />
            ))}
          </div>
          <div className="job-info">
            <div className="text-info">
              <PTypography className="company-name">
                {companyDetails[selectedCompany].role}{" "}
                <span>@{selectedCompany}</span>
              </PTypography>
              <PTypography className="duration">
                {companyDetails[selectedCompany].duration}
              </PTypography>
            </div>

            <JobDescriptionBullets
              points={companyDetails[selectedCompany].points}
            />
          </div>
        </div>
      ) : (
        <div className="mobile-work-content">
          {Object.entries(companyDetails).map(([companyName, company]) => (
            <Accordion
              sx={{
                backgroundColor: "rgba(20, 65, 121, 0.5)",
              }}
              key={companyName}
              expanded={expanded === companyName}
              onChange={handleChange(companyName)}
            >
              <AccordionSummary
                expandIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  />
                }
              >
                <div className="mobile-company-title">
                  <PTypography className="company-name">
                    {company.role}
                  </PTypography>
                  <span>@{companyName}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="job-info">
                  <div className="text-info">
                    <PTypography className="duration">
                      {company.duration}
                    </PTypography>
                  </div>
                  <JobDescriptionBullets points={company.points} />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </WorkProfileContainer>
  );
};
