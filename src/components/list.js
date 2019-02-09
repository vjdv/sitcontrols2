import React from "react";
import Selection from "./selection";
import cx from "classnames";
import ScrollBar from "./scrollbar";
import PropTypes from "prop-types";
import ScrollArea from "./scrollarea";
import s from "./../css/list.scss";

class List extends ScrollArea {
  constructor(props) {
    super(props);
    this.state.selected = [];
    this.state.selection_mode = "";
    this.itemRenderer = props.itemRenderer.bind(this);
    this.containerPropsFunc = ({ onDragOver, onDrop }) => ({ onDragOver, onDrop });
  }
  render() {
    this.selected_obj = {};
    this.state.selected.forEach(i => (this.selected_obj[i] = true));
    const containerProps = this.containerPropsFunc(this.props);
    let { className, contentClassName, ownerDocument } = this.props;
    let withMotion = false;
    let contentStyle = {
      marginTop: -this.state.topPosition,
      marginLeft: -this.state.leftPosition
    };
    var from = Math.floor(this.state.topPosition / this.props.rowHeight);
    var to = Math.min(this.state.data.length - 1, Math.floor((this.state.containerHeight + this.state.topPosition - 1) / this.props.rowHeight));
    return (
      <div ref={x => (this.wrapper = x)} className={cx(s.scrollarea, className)} style={this.props.style} onWheel={this.handleWheel.bind(this)} {...containerProps}>
        <div
          ref={x => (this.content = x)}
          style={{ height: this.state.realHeight, ...this.props.contentStyle, ...contentStyle }}
          className={cx(s.sitcontrol_list, s.scrollarea_content)}
          onTouchStart={this.handleTouchStart.bind}
          onTouchMove={this.handleTouchMove.bind}
          onTouchEnd={this.handleTouchEnd.bind}
          onKeyDown={this._handleKeyDown}
          tabIndex={this.props.focusableTabIndex}
        >
          <div style={{ height: from * this.props.rowHeight, padding: 0 }} />
          {from % 2 === 0 && <div style={{ padding: 0 }} />}
          {this.itemsRenderer(from, to)}
        </div>
        {this.canScrollY() && (
          <ScrollBar
            ownerDocument={ownerDocument}
            realSize={this.state.realHeight}
            containerSize={this.state.containerHeight}
            position={this.state.topPosition}
            onMove={this.handleScrollbarMove}
            onPositionChange={this.handleScrollbarYPositionChange}
            containerStyle={this.props.verticalContainerStyle}
            scrollbarStyle={this.props.verticalScrollbarStyle}
            smoothScrolling={withMotion}
            minScrollSize={this.props.minScrollSize}
            onFocus={this.focusContent}
            type="vertical"
            ss={s}
          />
        )}
      </div>
    );
  }
  componentDidUpdate() {}
  itemsRenderer = (from, to) => {
    const items = [];
    var count = 0;
    for (var i = from; i <= to; i++) {
      const item = this.itemRenderer({ index: i, key: count, style: { height: this.props.rowHeight }, s });
      items.push(item);
      count++;
    }
    return items;
  };
  clickHandler = e => {
    e.preventDefault();
    e.persist();
    var index = Number(e.target.dataset.index);
    while (index === undefined || isNaN(index)) {
      e.target = e.target.parentNode;
      index = Number(e.target.dataset.index);
    }
    const index = Number(e.target.dataset.index);
    if (this.state.selection_mode === "single") {
      //this.itemRenderer = this.itemRenderer.bind(this);
      if (this.state.selection_beforeChange) this.state.selection_beforeChange({ selected: [index] });
      else this.setState({ selected: [index] }, this.changed);
    } else if (this.state.selection_mode === "multiple") {
      //this.itemRenderer = this.itemRenderer.bind(this);
      if (e.type !== "click" || e.ctrlKey) {
        this.setState(newstate => {
          var ix = newstate.selected.indexOf(index);
          ix === -1 ? newstate.selected.push(index) : newstate.selected.splice(ix, 1);
          if (this.state.selection_beforeChange) this.state.selection_beforeChange({ selected: newstate.selected });
          else return newstate;
        }, this.changed);
      } else if (e.shiftKey) {
        const from = this.state.selected[this.state.selected.length - 1];
        const array = [];
        if (from < index) for (let i = from; i <= index; i++) array.push(i);
        else if (from > index) for (let i = index; i <= from; i++) array.push(i);
        else array.push(index);
        if (this.state.selection_beforeChange) this.state.selection_beforeChange({ selected: array });
        else this.setState({ selected: array });
      } else if (this.state.selection_beforeChange) this.state.selection_beforeChange({ selected: [index] });
      else this.setState({ selected: [index] }, this.changed);
    }
  };
  changed = () => {
    if (this.selection_onChange) this.selection_onChange({ selected: this.state.selected });
  };
  _handleKeyDown = e => {
    e.persist();
    if (e.keyCode === 65 && e.ctrlKey) {
      this.setState(newstate => {
        newstate.selected = this.state.data.map((o, i) => i);
        if (this.state.selection_beforeChange) this.state.selection_beforeChange({ selected: newstate.selected });
        return newstate;
      }, this.changed);
      e.preventDefault();
      e.stopPropagation();
    } else this.handleKeyDown(e);
  };
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = { data: props.data };
    React.Children.map(props.children, child => {
      if (child.type === Selection) {
        if (child.props.selected) newstate.selected = child.props.selected;
        if (child.props.mode !== prevstate.selection_mode) {
          newstate.selection_mode = child.props.mode;
          newstate.selection_beforeChange = child.props.onBeforeChange;
          newstate.selection_onChange = child.props.onChange;
        }
      }
      newstate.realHeight = props.data.length * props.rowHeight;
    });
    return newstate;
  }
  computeSizes() {
    let realHeight = this.content.offsetHeight;
    let containerHeight = this.wrapper.offsetHeight;
    let realWidth = this.content.offsetWidth;
    let containerWidth = this.wrapper.offsetWidth;
    return {
      realHeight: realHeight,
      containerHeight: containerHeight,
      realWidth: realWidth,
      containerWidth: containerWidth
    };
  }
}

List.itemRenderer = function({ index, key, style }) {
  const o = this.state.data[index];
  //const picked = this.state.pickedIndex === index;
  //const selected = this.state.value === o[this.props.valueField];
  const selected = !!this.state.selected[index];
  console.log(selected);
  return (
    <div
      className={cx("sitcontrol_list_item", selected && "sitcontrol_selected")}
      data-index={index}
      key={key}
      style={style}
      onClick={this.clickHandler}
      onTouchEnd={this.clickHandler}
      draggable={this.props.draggable}
    >
      {o[this.props.labelField]}
    </div>
  );
};

List.defaultProps = {
  data: [],
  labelField: "label",
  data: [],
  draggable: false,
  droppable: false,
  itemRenderer: List.itemRenderer,
  rowHeight: 30,
  //scroll
  speed: 1,
  vertical: true,
  horizontal: true,
  smoothScrolling: false,
  swapWheelAxes: false,
  contentWindow: typeof window === "object" ? window : undefined,
  ownerDocument: typeof document === "object" ? document : undefined,
  focusableTabIndex: 1
};

List.propTypes = {
  data: PropTypes.array,
  labelField: PropTypes.string,
  data: PropTypes.array,
  draggable: PropTypes.bool,
  droppable: PropTypes.bool,
  itemRenderer: PropTypes.func,
  rowHeight: PropTypes.number
};

export default List;
