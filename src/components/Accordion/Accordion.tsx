import React, { useState } from "react";

import {
  Accordion as MuiAccordion,
  AccordionProps,
  AccordionSummaryProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ExpandMore } from "@mui/icons-material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const AccordionComponent = () => {
  const [isExpanded, setIsExpanded] = useState<string | false>("panel1");

  var texts = [
    {
      id: 1,
      title: "Title 1",
      text: "Text 1",
    },
    {
      id: 2,
      title: "Title 2",
      text: "Text 2 Text 2 Text 2  Text 2 Text 2 Text 2Text 2 ",
    },
    {
      id: 3,
      title: "Title 3",
      text: "Text 3 Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3 Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3",
    },
    {
      id: 4,
      title: "Title 4",
      text: "Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4Text 4",
    },
  ];

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, newExpand: boolean) => {
      setIsExpanded(newExpand ? panel : false);
    };

  return (
    <>
      {texts.map((info: any, i: number) => (
        <Accordion
          key={i}
          expanded={isExpanded === `panel${info.id}`}
          onChange={handleChangeAccordion(`panel${info.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            arial-controls={`panel${info.id}d-content`}
            id={`panel${info.id}d-header`}
          >
            <Typography>{info.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{info.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
