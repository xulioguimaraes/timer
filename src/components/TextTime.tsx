import { Box, Divider, Typography } from "@mui/material";

interface TextTimeProps {
  minutes: number;
  seconds: number;
  hours: number;
  days: number;
}
export const TextTime = ({ days, hours, minutes, seconds }: TextTimeProps) => {
  return (
    <>
      <Box
        bgcolor={"blue"}
        borderRadius={8}
        boxShadow={6}
        p={3}
        marginTop={4}
        justifyContent="space-around"
        display="flex"
        width="100%"
        maxWidth={326}
      >
        <Typography
          color={"#FFF"}
          fontSize={41}
          textAlign="center"
          component={"h1"}
        >
          <Typography color={"#FFF"}>Dias</Typography> {days}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography
          color={"#FFF"}
          fontSize={41}
          textAlign="center"
          component={"h1"}
        >
          <Typography color={"#FFF"}>Horas</Typography> {hours}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography
          color={"#FFF"}
          fontSize={41}
          textAlign="center"
          component={"h1"}
        >
          <Typography color={"#FFF"}>Minutos</Typography> {minutes}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography
          color={"#FFF"}
          fontSize={41}
          textAlign="center"
          component={"h1"}
        >
          <Typography color={"#FFF"}>Segundos</Typography> {seconds}
        </Typography>
      </Box>
    </>
  );
};
