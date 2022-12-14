import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { useCallback, useEffect, useMemo, useState } from "react";
import { TextTime } from "../components/TextTime";

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
        p={[4,7]}
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

        <DesktopDatePicker
          label="Data do seu aniversario"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextTime
          days={days}
          hours={hours}
          seconds={seconds}
          minutes={minutes}
        />
      </Box>
    </Box>
  );
};
