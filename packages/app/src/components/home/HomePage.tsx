import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomePageCompanyLogo } from '@backstage/plugin-home';

export const HomePage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <h1>Welcome to Backstage!</h1>
                <HomePageCompanyLogo />
            </Grid>
        </Grid>
    );
};