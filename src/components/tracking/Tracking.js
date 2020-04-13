import React from 'react';
// import 'react-calendar/dist/Calendar.css';
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ListItemText from "@material-ui/core/ListItemText";
import FaceIcon from '@material-ui/icons/Face';
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import HealingIcon from '@material-ui/icons/Healing';

const actionsItems = [
    {icon: <ChildCareIcon/>, link: 'growth', primary: 'Growth'},
    {icon: <FaceIcon/>, link: 'momweight', primary: 'Mom\'s Weight'},
    {icon: <EmojiFoodBeverageIcon/>, link: 'food', primary: 'Food'},
    {icon: <HealingIcon/>, link: 'food', primary: 'Health'},
];

const Tracking = () => {
    return (
        <section className='main'>
            <div class="breadcrumb"><h3>Tracking</h3></div>
            <div class="tracking">
            <List >
                {
                    actionsItems.map((item) => {
                        return (
                            <ListItem class="rounded trackList">
                                <Link to={{pathname: `/${item.link}/`}}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            {item.icon}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${item.primary}`}/>
                                </Link>
                            </ListItem>
                        )
                    })
                }
            </List>
            </div>
        </section>
    );
}

export default Tracking;