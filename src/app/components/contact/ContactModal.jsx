import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ListItem from "@material-ui/core/ListItem";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    borderRadius: "10px;",
    boxShadow: "none !important",
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function ContactModal({ contactText,  }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <a onClick={handleOpen}>{contactText}</a>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form
            action="https://formspree.io/info@dailycultures.com"
            method="POST"
          >
            <input
              className="nameInput"
              placeholder="Name"
              type="text"
              name="name"
            />
            <input
              className="emailInput"
              placeholder="Email"
              type="email"
              name="_replyto"
            />
            <input
              id="message"
              placeholder="Message..."
              type="text"
              name="message"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </Modal>
    </>
  );
}
