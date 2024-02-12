import React from "react";
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

function GridDisplay({
  list,
  onClick,
}: {
  list: any[];
  onClick?: (index: number) => void;
}) {
  return (
    <Grid container spacing={4} justifyContent="center">
      {list.map(({ title, text, image }, index) => (
        <Grid item xs={12} sm={6} md={4} key={`services-${index}`}>
          <Card
            sx={{
              borderRadius: 2,
              height: "100%",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={image}
              alt={title}
              onClick={() => {
                if (onClick) {
                  onClick(index);
                }
              }}
            />
            {title && text && (
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {text}
                </Typography>
              </CardContent>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default GridDisplay;
