import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    profilebox: {
        width: '300px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10px',
        height: '200px',
        background: 'linear-gradient(to bottom, #03A9F4 50%, white 50%)',
        '& a': {
            fontWeight: 'bold',
            fontSize: '12px'

        }
    },
    profileheading: {
        display: 'flex',
        marginTop: '100px',
        '& h3': {
            margin: '0 15px'
        }
    },
    profilelinks: {
        textAlign: 'center',
        marginTop: '20px'
    },
    profilepic: {
        border: '1px solid black',
        marginTop: '-19px',
        backgroundColor: 'white'
    }
}));

export default function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.profilebox}>
            <div className={classes.profileheading}>
                <FaceIcon className ={classes.profilepic} fontSize='large' />
                <h3>Name N. Name</h3>
            </div>
            <div className={classes.profilelinks}>
                <a href="#">TWEETS</a> <a href="#">FOLLOWING</a> <a href="#">FOLLOWERS</a>
            </div>
        </div>
    );
}
