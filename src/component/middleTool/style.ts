import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            position: 'relative',
            margin: theme.spacing(-5)
        },
    }));

export default useStyles;
