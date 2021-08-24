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
    const data = useAppSelector((state) => state.apis.dataAPI[0]);
    React.useEffect(() => {
        getDataApi().then((api) => dispatch(dataAPI(api)));
    }, []);
    return (
        <div className={classes.root}>
            <Card>
                <Container>
                    <Box display="flex" justifyContent="center" width="500px">
                        <Box display="flex" flexGrow={1} textAlign="center" flexDirection="column">
                            <CardContent>
                                <OfflineBoltSharp color="primary" fontSize="large" />
                            </CardContent>
                            <Typography variant="caption">
                                Confirmed
                            </Typography>
                            <Typography paragraph>
                                {data?.confirmed.value}
                            </Typography>
                        </Box>
                        <Box display="flex" flexGrow={1} textAlign="center" flexDirection="column">
                            <CardContent>
                                <Archive color="primary" fontSize="large" />
                            </CardContent>
                            <Typography variant="caption">
                                Recovered
                            </Typography>
                            <Typography paragraph>
                                {data?.recovered.value}
                            </Typography>
                        </Box>
                        <Box display="flex" flexGrow={1} textAlign="center" flexDirection="column">
                            <CardContent>
                                <LocalHospital color="primary" fontSize="large" />
                            </CardContent>
                            <Typography variant="caption">
                                Death
                            </Typography>
                            <Typography paragraph>
                                {data?.deaths.value}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Card>
        </div>
    );
};

export default Midtool;
