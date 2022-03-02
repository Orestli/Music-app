import React from 'react';
import {Box, Grid} from "@mui/material";
import TrackItem from '../TrackItem/TrackItem';
import TrackListProps from "./TrackList.props";

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;