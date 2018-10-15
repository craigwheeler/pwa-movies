import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 165,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});
class SimpleSelect extends React.Component {
    state = {
        age: 10,
        name: 'hai',
    };
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    render() {
        const {classes} = this.props;
        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    {/*<InputLabel htmlFor="age-auto-width">Age</InputLabel>*/}
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        input={<Input name="age" id="age-auto-width"/>}
                        // autoWidth
                    >
                        <MenuItem value={10}>Latest</MenuItem>
                        <MenuItem value={20}>Trending</MenuItem>
                        <MenuItem value={30}>Popular</MenuItem>
                        <MenuItem value={40}>Top Rated</MenuItem>
                    </Select>
                    {/*<FormHelperText>Auto width</FormHelperText>*/}
                </FormControl>
            </form>
        );
    }
}
SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleSelect);
