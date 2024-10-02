import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CustomButton from "./CustomButton";

export default function ProductCard({
  name,
  description,
  image,
  buyPrice,
  rentPrice,
}) {
  // Function to limit description to 20 words
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <Card
      sx={{
        width: 300,
        height: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ width: "100%", height: 180, objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {truncateDescription(description, 6)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "8px ",
        }}
      >
        <CustomButton
          text={`Buy for: ${buyPrice}`}
          height="40px"
          width="150px"
          backgroundColor="#dc3545"
          hoverBackgroundColor="#e4606d"
          color="white"
          onClick={() => alert(`Buying for ${buyPrice}`)}
        />
        <CustomButton
          text={`Rent: Rs${rentPrice}/day`}
          height="40px"
          width="175px"
          backgroundColor="#29335c"
          hoverBackgroundColor="#415091"
          color="white"
          onClick={() => alert(`Renting for ${rentPrice} per day`)}
        />
      </CardActions>
    </Card>
  );
}
