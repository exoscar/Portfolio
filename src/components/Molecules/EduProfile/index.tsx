import PTypography from "../../atoms/PTypography";
import { EduProfileWrapper, TimeLineItemContentContainer } from "./style";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

interface TimeLineItemContentProps {
  educationTitle: string;

  institution: string;
  score: string;
  indi: number;
  specialisation?: string;
}

const TimeLineItemContent: React.FC<TimeLineItemContentProps> = ({
  educationTitle,

  institution,
  score,
  indi,
  specialisation,
}) => {
  return (
    <TimeLineItemContentContainer
      style={{
        borderRadius: `${
          indi % 2 != 0 ? " 0rem 1rem 1rem 1rem" : " 1rem 0rem 1rem 1rem"
        }`,
      }}
    >
      <PTypography className="edu-title">{educationTitle}</PTypography>
      <PTypography className="institute-title">{specialisation}</PTypography>
      <PTypography className="institute-title">{institution}</PTypography>
      <PTypography className="Score">{score}</PTypography>
    </TimeLineItemContentContainer>
  );
};

const EduDetails = [
  {
    educationTitle: "Bachelor of Technology",
    duration: "2020 - 2024",
    institution: `Anil Neerukonda Institute of Technology and Sciences`,
    score: "CGPA: 9.14",
    specialisation: "Computer Science and Engineering",
  },
  {
    educationTitle: "Intermediate",
    duration: "2018 - 2020",
    institution: "Sri Chaitanya Junior College",
    score: "CGPA: 9.63",
  },
  {
    educationTitle: "High School",
    duration: "2018",
    institution: "Sri Chaitanya Techno School",
    score: "percentage: 89.47%",
  },
];

export const EduProfile = () => {
  return (
    <EduProfileWrapper>
      <PTypography className="title">Academic Qualification</PTypography>
      <div className="timeline-container">
        <Timeline position="alternate">
          {EduDetails.map((edu, index) => (
            <TimelineItem key={index + edu.duration}>
              <TimelineSeparator>
                <TimelineDot color="primary" sx={{ width: 30, height: 30 }} />
                {index < EduDetails.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className={`${(index + 1) % 2 == 0 && "lefty"}`}>
                  <PTypography className="year">{edu.duration}</PTypography>
                  <TimeLineItemContent
                    educationTitle={edu.educationTitle}
                    specialisation={edu?.specialisation}
                    institution={edu.institution}
                    score={edu.score}
                    indi={index + 1}
                  />
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </EduProfileWrapper>
  );
};
