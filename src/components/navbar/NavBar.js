import React, { useState }  from 'react';
import {Link} from 'react-router-dom';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalActivityIcon from '@material-ui/icons/LocalActivity'

const NavBar = () => {
        const [value, setValue] = useState('home');

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        return (
            <BottomNavigation value={value} onChange={handleChange}>
                <Link to="/"> <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>}/></Link>
                <Link to="/tracking"><BottomNavigationAction label="Tracking" value="tracking" icon={<TrendingUpIcon/>}/></Link>
                <Link to="/memory"><BottomNavigationAction label="Favorite" value="favorite" icon={<FavoriteIcon/>}/></Link>
                <Link to="/activities"><BottomNavigationAction label="Favorite" value="favoriteIcon" icon={<LocalActivityIcon/>}/></Link>
            </BottomNavigation>
        );
    }
export default NavBar;