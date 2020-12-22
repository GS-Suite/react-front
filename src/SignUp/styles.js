import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    sidebarLogo: {
      display: "flex",
      justifyItems: "flex-center",
      alignItems: "center",
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 2),
      padding: theme.spacing(1),
      borderRadius: 6,
      boxShadow: theme.shadows[5],
      fontSize: "larger",
    },
    loading: {
      display: 'flex',
      marginTop: 50,
      justifyContent: "center",
    },
  }));

export default useStyles;