import React from 'react';
import logo from '../../logo.jpg';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';


const actionsItems = [
    {icon: <AssessmentIcon fontSize="large"/>, link: 'growth', primary: 'Growth', secondary: 'Add new measurement'},
    {icon: <EmojiFoodBeverageIcon fontSize="large"/>, link: 'food', primary: 'Food', secondary: 'Add new food'},
    {icon: <ImageIcon fontSize="large"/>, link: 'memory', primary: 'Memory', secondary: 'Add new Memory'},
];


const Homepage = () => {
    return (
        <div class="main">
         <header>
             <div class="headerInfo">
                 <h2>Friday, April 3 </h2>
             </div>
         </header>
            <div className="generalInfo">
                <img src={logo} className="App-logo rounded" alt="logo"/>

                <div className="textMsg">
                    <div className="introMsg">
                        <h2>Good morning,</h2>
                        <h2>Silvia & Aly</h2>
                    </div>

                    <div className="bottomMsg">
                        <h3>3 <br/> weeks </h3>
                    </div>
                </div>

            </div>
            <div className="latestActions rounded">
                <h3>Actions</h3>

                <List className="homeContainer">
                    {
                        actionsItems.map((item) => {
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            {item.icon}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Link to={{pathname: `/${item.link}/`}}> <ListItemText
                                        primary={`${item.primary}`} secondary={`${item.secondary}`}/>
                                    </Link>
                                </ListItem>
                            )
                        })
                    }
                </List>

            </div>
        </div>
    )
}

export default Homepage;