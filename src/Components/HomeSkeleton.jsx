import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { Box, Button } from "@mui/material";

function HomeSkeleton(props) {
  const { loading = false } = props;

  return (
    <Card
      sx={{
        maxWidth: "100%",
        mt: 10,
        mr: 5,
        p: 2,
        // display: "flex",
        // alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {" "}
      {/* Adjusted card width */}
      <CardHeader
        avatar={
          loading && (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          )
        }
        title={
          loading && (
            <Skeleton
              animation="wave"
              height={20} /* Increased title height */
              width="60%"
              style={{ marginBottom: 6 }}
            />
          )
        }
        subheader={
          loading && <Skeleton animation="wave" height={15} width="40%" />
        }
      />
      {loading && (
        <Skeleton
          sx={{ height: 180 }} /* Adjusted image height */
          animation="wave"
          variant="rectangular"
        />
      )}
      <CardContent>
        {loading && (
          <React.Fragment>
            <Skeleton animation="wave" height={20} width="90%" />
            <Skeleton animation="wave" height={15} width="60%" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Skeleton variant="rectangular" width={90} height={35} />
              <Skeleton variant="rectangular" width={90} height={35} />
            </Box>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}

HomeSkeleton.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
        gap: 3, // gap between cards
        padding: 3, // margin on all sides
        justifyItems: "center", // center the items horizontally
      }}
    >
      {/* Show 12 skeletons (3 rows, 4 columns) */}
      {Array.from(new Array(12)).map((_, index) => (
        <HomeSkeleton key={index} loading />
      ))}
    </Box>
  );
}
