import React from 'react';
// import {TextField, Button} from '@material-ui/core';
// //import 'react-calendar/dist/Calendar.css';
// import {useDispatch} from "react-redux";
// import {Link} from "react-router-dom";
// import DateFnsUtils from '@date-io/date-fns';
// import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
// import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// import TableChartIcon from '@material-ui/icons/TableChart';

const Growth = (props) => {

    console.log ("Props", props)

    // const [weightValue, setWeightValue] = useState('');
    // const [heightValue, setHeightValue] = useState('');
    // const [dateValue, setDateValue] = useState(new Date());
    //
    // const dispatch = useDispatch();
    //
    // const onClickAddButton = ({weightValue, heightValue, dateValue}) => {
    //     const newItem = {
    //         'weight': weightValue,
    //         'height': heightValue,
    //         'date': dateValue
    //     }
    //
    //     //itemActions.addItem(newItem)(dispatch)
    //     props.history.push('/')
    // }

    return (
        <section className='main'>
            <div className="breadcrumb"><h3>Growth</h3></div>
            <div className="tracking">
                <div className="container">
                    {/*<form className="field" noValidate autoComplete="off"*/}
                    {/*      onSubmit={() => onClickAddButton({weightValue, heightValue, dateValue})}>*/}
                    {/*    <TextField id="standard-basic" label="Weight (kg)" onChange={event => {*/}
                    {/*        setWeightValue(event.target.value)*/}
                    {/*    }}/>*/}
                    {/*    <TextField id="standard-basic" label="Height (cm)" onChange={event => {*/}
                    {/*        setHeightValue(event.target.value)*/}
                    {/*    }}/>*/}
                    {/*    /!*<Calendar onChange={setDateValue} label="Select a date"/>*!/*/}

                    {/*    <MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                    {/*        <KeyboardDatePicker*/}
                    {/*            margin="normal"*/}
                    {/*            label="Select a date"*/}
                    {/*            value={dateValue}*/}
                    {/*            readonly*/}
                    {/*            format="dd-MM-yyyy"*/}
                    {/*            onChange={setDateValue}*/}
                    {/*            onAccept={setDateValue}*/}
                    {/*            onBlur={setDateValue}*/}
                    {/*            KeyboardButtonProps={{*/}
                    {/*                'aria-label': 'change time',*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    </MuiPickersUtilsProvider>*/}

                    {/*    <div className="button">*/}
                    {/*        <Button variant="contained" color="primary" type="submit">Save</Button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>
        </section>
    )
}

export default Growth;