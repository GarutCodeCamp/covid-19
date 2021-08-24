import React from 'react';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import AVD from '../../image/rip.jpg';
import data from '../../data';
import useStyles from './style';

const Section = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Container>
            <Paper className={classes.paper} elevation={6}>
                <Typography variant="h3">
                    {data.title}
                </Typography>
                <Box letterSpacing={1} textAlign="start" lineHeight={2} marginTop={5} margin={5}>
                    <img className={classes.sideImg} src={AVD} alt="covid-19" />
                    <Typography display="inline" paragraph>
                        {data.paragraf}
                        <Typography variant="h6">
                        {data.title2}
                        </Typography>
                        {data.paragraf2}
                        <ul>
                            <li>{data.ul.li1}</li>
                            <li>{data.ul.li2}</li>
                        </ul>
                        {data.paragraf3}
                    </Typography>
                </Box>
            </Paper>
           </Container>
        </div>
    );
};

export default Section;
