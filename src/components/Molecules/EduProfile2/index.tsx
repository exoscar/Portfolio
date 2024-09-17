import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { timelineContentClasses } from "@mui/lab/TimelineContent";
import PTypography from "../../atoms/PTypography";
import { EduProfileWrapper, EduCardWrapper } from "./style";
import { TimelineOppositeContent } from "@mui/lab";

const EduItem = ({
  title,
  duration,
  institution,
  score,
}: {
  title: string;
  duration: string;
  institution: string;
  score: string;
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          width: "0%",
          padding: "0",
        }}
      ></TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <EduCardWrapper>
          <PTypography
            fontSize={16}
            fontWeight={700}
            className="institute-title"
          >
            {institution}
          </PTypography>
          <PTypography fontWeight={500} className="edu-title">
            {title}
          </PTypography>

          <PTypography fontSize={14} className="year">
            {duration}
          </PTypography>

          <PTypography fontSize={14} className="Score">
            {score}
          </PTypography>
        </EduCardWrapper>
      </TimelineContent>
    </TimelineItem>
  );
};

export const AcademicQualification2 = () => {
  return (
    <EduProfileWrapper>
      <PTypography className="title">Education</PTypography>
      <Timeline
        sx={{
          [`& .${timelineContentClasses.root}`]: {
            flex: 10000000,
          },
          padding: "0",
        }}
      >
        <EduItem
          title="Bachelor of Technology"
          duration="2020 - 2024"
          institution="Anil Neerukonda Institute of Technology and Sciences"
          score="CGPA: 9.14"
        />
        <EduItem
          title="Intermediate"
          duration="2018 - 2020"
          institution="Sri Chaithanya Junior College"
          score="CGPA: 9.63"
        />
        <EduItem
          title="10th Class"
          duration="2017 - 2018"
          institution="Sri Chaithanya Techno School"
          score="Percentage: 89.47%"
        />
      </Timeline>
    </EduProfileWrapper>
  );
};
