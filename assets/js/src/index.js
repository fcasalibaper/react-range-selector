import React from 'react';
import Checkbox from './input-checkbox.js';
import sortBy from 'lodash/sortBy';
import takeRight from 'lodash/takeRight';
import render from 'react-dom';
class RangeSelector extends React.Component{
  displayName: 'RangeSelector';
  propTypes: {
    name: React.PropTypes.string.isRequired,
    range: React.PropTypes.array,
    customiseRange: React.PropTypes.array,
    componentName: React.PropTypes.string.isRequired,
    initalSelected: React.PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: props.initalSelected ? props.initalSelected : []
    };

    this.updateSelected = this.updateSelected.bind(this);
  }

  addNewNumber(array,number) {
    array.push(number);
    return sortBy(takeRight(array, 2));
  }

  updateSelected(number) {
    let newlySelected = this.state.selected.slice();
    if (newlySelected.length === 1 && newlySelected[0] === number) {
      newlySelected = [];
    } else if (newlySelected.length === 2) {
      newlySelected = [];
      newlySelected = this.addNewNumber(newlySelected,number);
    } else {
      newlySelected = this.addNewNumber(newlySelected,number);
    }
    /*eslint-disable*/
    // need to use setState for form https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md

    this.setState({
      selected: newlySelected
    });
    /*eslint-enable*/
  }

  isInSelected(number) {
    let start = this.state.selected[0],
      end = this.state.selected[1];
    if(!end) {
      if (number === start) {
        return true;
      }
    } else {
      if (number >= start && number <= end) {
        return true;
      }
    }
    return false;
  }

  stateClasslist(number) {
    const inRangeClass = 'is-in-range',
      startClass = 'is-start';
    let start = this.state.selected[0],
      end = this.state.selected[1];
    if (this.isInSelected(number)){
      if (number === start) {
        return startClass + ' ' + inRangeClass;
      } else if (number === end) {
        return 'is-end' + ' ' + inRangeClass;
      }
      return inRangeClass;
    }
    return '';
  }

  render() {
    let inputList=[],
      selected,
      checkboxName,
      stateClassSet,
      i ,
      rangelist=[],
      rangeStart,
      rangeEnd;

    if (this.props.range && this.props.customiseRange) {
      return (<h1>Please use range or customiseRange, not both</h1>);
    } else if (!this.props.range && !this.props.customiseRange) {
      return (<h1>Please set range or customiseRange</h1>);
    }

    if (this.props.range) {
      rangeStart = this.props.range[0],
      rangeEnd = this.props.range[1];
      for (i = rangeStart; i <= rangeEnd; i++ ) {
        rangelist.push(i);
      }
    } else {
      rangelist = this.props.customiseRange;
    }

    inputList = rangelist.map(
      (number,i) => {
        checkboxName = this.props.componentName + '_' +
          this.props.name.replace(/\s/g, '-').toLowerCase() + '-' + i;
        selected = this.isInSelected(i);
        stateClassSet = this.stateClasslist(i);

        return (
          <Checkbox
              inputChecked={this.updateSelected}
              isSelected={selected}
              key={i}
              labelContent={number}
              linked={checkboxName}
              stateClass={stateClassSet}
              value={i}
          />
        );
      },this);

    return (
      <div className={'range-selector__item'}>
        <b className={'range-selector__item-title'}>{this.props.name}</b>
        {inputList}
      </div>
    );
  }
}

module.exports = RangeSelector;
