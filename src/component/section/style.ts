import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        root: {
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            marginTop: theme.spacing(20),
            textAlign: 'center'
        },
        sideImg: {
            width: '50%',
            margin: theme.spacing(0, 3),
            objectFit: 'cover',
            borderRadius: theme.spacing(0.5),
            boxShadow: '0.1px 0px 10px',
            float: 'left'
        },
        paper: {
            padding: theme.spacing(1)
        }
    },
));

export default useStyles;
