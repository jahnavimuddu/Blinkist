import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  selectedTab: {
    color: "#22C870 !important"
  },
}));

export const TabsComponent = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event)
    setValue(newValue);
  };

  let classes = useStyles();

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: 912 }}>
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2CE080",
              },
            }}
          >
            <Tab
              classes={{ selected: classes.selectedTab }}
              label="Currently Reading"
              value="1"
              sx={{
                width: 304,
                alignItems: "flex-start",
              }}
            />
            <Tab
              classes={{ selected: classes.selectedTab }}
              label="Finished"
              value="2"
              sx={{
                width: 304,
                alignItems: "flex-start",
              }}
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};