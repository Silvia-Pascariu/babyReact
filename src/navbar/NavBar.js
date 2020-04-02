import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalActivityIcon from '@material-ui/icons/LocalActivity'

// const useStyles = makeStyles({
//
// }
//     root: {
//         width: 500,
//     },
// });

const NavBar = () => {
        //const classes = useStyles();
        const [value, setValue] = React.useState('recents');

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };
        return (
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>}/>
                <BottomNavigationAction label="Tracking" value="tracking" icon={<TrendingUpIcon/>}/>
                <BottomNavigationAction label="Favorite" value="favorite" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Favorite" value="favoriteIcon" icon={<LocalActivityIcon/>}/>
            </BottomNavigation>
        );
    }
export default NavBar;