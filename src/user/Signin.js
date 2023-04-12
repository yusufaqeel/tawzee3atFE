import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../";

export default function Signin(props) {
  const [newUser, setNewUser] = useState({});

  const ChangeHandler = (e) => {
    const user = { ...newUser };
    user[e.target.name] = e.target.value;
    setNewUser(user);
    console.log(user);
  };

  const loginHandler = () => {
    props.login(newUser);
  };

  const [t, i18n] = useTranslation();

  return (
    <div>
      <h1 className="title">{t("Signin")}</h1>

      <Container className="form">
        <Form.Group>
          <Form.Label>{t("Emailaddress")}</Form.Label>
          <Form.Control name="emailAddress" onChange={ChangeHandler} />
        </Form.Group>

        <Form.Group>
          <Form.Label>{t("Password")}</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={ChangeHandler}
          />
        </Form.Group>

        <Button variant="grey" onClick={loginHandler}>
          {t("Login")}
        </Button>
      </Container>
    </div>
  );
}
