import React, { useEffect } from "react";
import i18n from "../../i18n";
// import { Select, MenuItem, ListItemIcon } from "@material-ui/core";
import { Select, MenuItem, ListItemIcon } from "@mui/material";
import FlagIcon from "./FlagIcon";

const TranslationButton = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("es");
  const handleChangeLanguage = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    const storageLanguage = localStorage.getItem("selectedLanguage");
    if (storageLanguage) {
      setSelectedLanguage(storageLanguage);
    }
  }, []);
  return (
    <Select
      value={selectedLanguage}
      onChange={handleChangeLanguage}
      defaultValue="es"
    >
      <MenuItem value="es" selected>
        <ListItemIcon>
          <FlagIcon countryCode="es" />
        </ListItemIcon>
        ES
      </MenuItem>
      <MenuItem value="en">
        <ListItemIcon>
          <FlagIcon countryCode="en" />
        </ListItemIcon>
        EN
      </MenuItem>
      <MenuItem value="ch">
        <ListItemIcon>
          <FlagIcon countryCode="ch" />
        </ListItemIcon>
        CH
      </MenuItem>
    </Select>
  );
};

export default TranslationButton;
