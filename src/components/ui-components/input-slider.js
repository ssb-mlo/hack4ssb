import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react'
import {withGlobalState} from "react-globally";
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'

const Handle = Slider.Handle;

const handle = (props) => {
    const {value, dragging, index, ...restProps} = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class FigureList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 0,
        };
        this.props = {
            number: 0,
        }
    }


    renderFigure() {

        return(

            this.figure(this.props.number)
    )
    }

    figure(number) {
        return (
            <div id={number} className={'flexbox'}>
                <svg width="400" height="110">
                    <rect width="100" height="100" className={'testBox'}/>
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
        );

    }

    render() {
        return (
            <div>

                {this.renderFigure()}
            </div>
        )
    }
}


class SliderComponent extends React.PureComponent {

    render() {
        let sliderMin = 0;
        let sliderMax = 20;
        return (
            <div className={'container'}>
                <div className={'col'}>
                    <div>
                        <p>Slider with custom handle</p>
                        <Slider min={sliderMin} max={sliderMax} defaultValue={3} handle={handle} dots={true}/>
                        <FigureList number='5'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withGlobalState(SliderComponent);