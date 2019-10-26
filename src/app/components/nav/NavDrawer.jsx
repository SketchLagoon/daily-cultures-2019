import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import ContactModal from "../contact/ContactModal";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function NavDrawer() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState({ right: false });

  const toggleDrawer = (side, open) => event => {
    (event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")) ||
      setDrawer({ ...drawer, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, true)}
      onKeyDown={toggleDrawer(side, true)}
    >
      <List>
        {["Home", "Products", "Science", "Trial"].map((text, index) => (
          <a href={text}>
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <a href="https://www.instagram.com/daily_cultures_/">Instagram</a>
        </ListItem>
        <ListItem button>
          <a href="https://twitter.com/DailyCultures">Twitter</a>
        </ListItem>
        <ListItem button>
          <a href="https://www.facebook.com/DailyCultures/">Facebook</a>
        </ListItem>
        <ListItem>
          <ContactModal contactText={"contact"} />
        </ListItem>
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)} className="menu-btn">
        <Icon>menu</Icon>
      </Button>
      <Drawer
        anchor="right"
        open={drawer.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
