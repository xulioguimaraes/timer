import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { useCallback, useEffect, useMemo, useState } from "react";

export const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [value, setValue] = useState<Date | null>(null);
  const [deadline, setDeadline] = useState<Date | string>("");

  const handleChange = (newValue: Date | null) => {
    const year = new Date().getFullYear();
    const today = new Date();
    const value = new Date(newValue as Date);
    const resultDate = value > today;
    const dateFull = String(newValue);
    const newDate = dateFull.split(" ");
    const arrayDate = newDate.map((item, index) => {
      if (index === 3) {
        if (resultDate) {
          return value.getFullYear();
        }
        return year + 1;
      }
      return item;
    });
    let newString = arrayDate.join();
    newString = newString.replace(/,/g, " ");
    setDeadline(newString as unknown as Date);
    setValue(newValue);
  };

  const getTime = () => {
    const date1 = new Date(deadline);
    const date2: any = new Date();
    const time = (date1 as any) - date2;
    console.log(time);

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    if (deadline !== "") {
      const interval = setInterval(() => getTime(), 1000);

      return () => clearInterval(interval);
    }
  }, [deadline]);
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      height="100vh"
      width="100%"
      flexDirection="column"
    >
      <Box
        bgcolor={"#F3F6F9"}
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        p={7}
        borderRadius={8}
        boxShadow={7}
        alignItems={"center"}
      >
        <Typography
          maxWidth={"233px"}
          textAlign="center"
          fontWeight={"bold"}
          mb={3}
          fontSize={20}
        >
          Quanto tempo falta para o seu aniversario?
        </Typography>

        <DesktopDateTimePicker
          label="Data do seu aniversario"
          inputFormat="dd/MM/yyyy"
          openTo="year"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
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
      </Box>
    </Box>
  );
};
