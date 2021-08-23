import React from 'react';
import { Box, Card, Container, CardContent, Typography } from '@material-ui/core';
import { Archive, LocalHospital, OfflineBoltSharp } from '@material-ui/icons';
import useStyles from './style';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getDataApi } from '../../API';
import { dataAPI } from '../../redux/dataApi';

const Midtool = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.apis.data);
    React.useEffect(() => {
        getDataApi().then((api) => dispatch(dataAPI(api)));
    }, []);
    console.log(data);
    return (
        <div className={classes.root}>
            <Card>
                <Container>
                    <Box display="flex">
                        <Box display="flex" justifyContent="center" textAlign="center" flexDirection="column">
                            <CardContent>
                                <OfflineBoltSharp color="primary" fontSize="large" />
                            </CardContent>
                            <Typography paragraph>
                                999
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" textAlign="center" flexDirection="column">
                            <CardContent>
                                <Archive color="primary" fontSize="large" />
                            </CardContent>
                            <Typography paragraph>
                                Confirmed
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" textAlign="center" flexDirection="column">
                            <CardContent>
                                <LocalHospital color="primary" fontSize="large" />
                            </CardContent>
                            <Typography paragraph>
                                999
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Card>
        </div>
    );
};

export default Midtool;
