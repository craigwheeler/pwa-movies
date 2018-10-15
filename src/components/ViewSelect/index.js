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
        view: 10,
    };
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    render() {
        const {classes} = this.props;
        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.view}
                        onChange={this.handleChange}
                        input={<Input name="view"/>}
                    >
                        <MenuItem value={10}>Popular</MenuItem>
                        <MenuItem value={20}>Top Rated</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}
SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleSelect);
