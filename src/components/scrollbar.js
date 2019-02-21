import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./../css/scrollarea.scss";

class ScrollBar extends React.Component {
  constructor(props) {
    super(props);
    let newState = this.calculateState(props);
    this.state = {
      position: newState.position,
      scrollSize: newState.scrollSize,
      isDragging: false,
      lastClientPosition: 0
    };
    if (props.type === "vertical") {
      this.bindedHandleMouseMove = this.handleMouseMoveForVertical.bind(this);
    } else {
      this.bindedHandleMouseMove = this.handleMouseMoveForHorizontal.bind(this);
    }
    this.bindedHandleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    if (this.props.ownerDocument) {
      this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
      this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.calculateState(nextProps));
  }

  componentWillUnmount() {
    if (this.props.ownerDocument) {
      this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
      this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
    }
  }

  calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
    let relativeSize = realContentSize - containerSize;

    return 1 - (relativeSize - contentPosition) / relativeSize;
  }

  calculateState(props) {
    let fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
    let proportionalToPageScrollSize = (props.containerSize * props.containerSize) / props.realSize;
    let scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;

    let scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
    return {
      scrollSize: scrollSize,
      position: Math.round(scrollPosition)
    };
  }

  render() {
    const s = this.props.ss;
    let { isDragging, type, scrollbarStyle, containerStyle } = this.props;
    let isVoriziontal = type === "horizontal";
    let isVertical = type === "vertical";
    let scrollStyles = this.createScrollStyles();
    return (
      <div
        className={cx(s.scrollbar_container, isDragging && s.active, isVoriziontal && s.horizontal, isVertical && s.vertical)}
        style={containerStyle}
        onMouseDown={this.handleScrollBarContainerClick}
        ref={x => (this.scrollbarContainer = x)}
      >
        <div className={s.scrollbar} style={{ ...scrollbarStyle, ...scrollStyles }} onMouseDown={this.handleMouseDown} />
      </div>
    );
  }

  handleScrollBarContainerClick = e => {
    e.preventDefault();
    let multiplier = this.computeMultiplier();
    let clientPosition = this.isVertical() ? e.clientY : e.clientX;
    let { top, left } = this.scrollbarContainer.getBoundingClientRect();
    let clientScrollPosition = this.isVertical() ? top : left;

    let position = clientPosition - clientScrollPosition;
    let proportionalToPageScrollSize = (this.props.containerSize * this.props.containerSize) / this.props.realSize;

    this.setState({ isDragging: true, lastClientPosition: clientPosition });
    this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
  };

  handleMouseMoveForHorizontal(e) {
    let multiplier = this.computeMultiplier();

    if (this.state.isDragging) {
      e.preventDefault();
      let deltaX = this.state.lastClientPosition - e.clientX;
      this.setState({ lastClientPosition: e.clientX });
      this.props.onMove(0, deltaX / multiplier);
    }
  }

  handleMouseMoveForVertical(e) {
    let multiplier = this.computeMultiplier();

    if (this.state.isDragging) {
      e.preventDefault();
      let deltaY = this.state.lastClientPosition - e.clientY;
      this.setState({ lastClientPosition: e.clientY });
      this.props.onMove(deltaY / multiplier, 0);
    }
  }

  handleMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
    let lastClientPosition = this.isVertical() ? e.clientY : e.clientX;
    this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
    this.props.onFocus();
  };

  handleMouseUp(e) {
    if (this.state.isDragging) {
      e.preventDefault();
      this.setState({ isDragging: false });
    }
  }

  createScrollStyles() {
    if (this.props.type === "vertical") {
      return {
        height: this.state.scrollSize,
        marginTop: this.state.position
      };
    } else {
      return {
        width: this.state.scrollSize,
        marginLeft: this.state.position
      };
    }
  }

  computeMultiplier() {
    return this.props.containerSize / this.props.realSize;
  }

  isVertical() {
    return this.props.type === "vertical";
  }
}

ScrollBar.propTypes = {
  onMove: PropTypes.func,
  onPositionChange: PropTypes.func,
  onFocus: PropTypes.func,
  realSize: PropTypes.number,
  containerSize: PropTypes.number,
  position: PropTypes.number,
  containerStyle: PropTypes.object,
  scrollbarStyle: PropTypes.object,
  type: PropTypes.oneOf(["vertical", "horizontal"]),
  ownerDocument: PropTypes.any,
  minScrollSize: PropTypes.number,
  ss: PropTypes.object
};

ScrollBar.defaultProps = {
  type: "vertical",
  ss: s
};

export default ScrollBar;
