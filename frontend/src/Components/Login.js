import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import CircularProgress from "@material-ui/core/CircularProgress";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://dejandespot.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(-20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: "5px 7px 12px 0px rgba(0,0,0,0.25)"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    minHeight: 36
  },
  input: {
    marginBottom: theme.spacing(2)
  },
  helperText: {
    position: "absolute",
    bottom: -18,
    fontWeight: "bold"
  },
  error: {
    color: theme.palette.error.main,
    textAlign: "center",
    position: "absolute",
    marginTop: -4
  }
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Email is required!"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters long!")
    .required("Password is required!")
});

export default function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      props.login(values);
    }
  });

  const classes = useStyles();

  const { handleChange, handleBlur, errors, touched } = formik;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
            value={formik.values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!(touched.email && errors.email)}
            helperText={errors.email && touched.email && errors.email}
            className={classes.input}
            FormHelperTextProps={{ className: classes.helperText }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
            value={formik.values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!(touched.password && errors.password)}
            helperText={errors.password && touched.password && errors.password}
            className={classes.input}
            FormHelperTextProps={{ className: classes.helperText }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            {props.loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <div>Login</div>
            )}
          </Button>
          {props.error && (
            <Typography variant="body1" className={classes.error}>
              {props.error}
            </Typography>
          )}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
