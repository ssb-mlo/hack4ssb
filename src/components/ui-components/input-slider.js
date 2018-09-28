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

    renderFigure() {

        let selectedStyle = {
            fill: 'white',
            strokeWidth: 1,
            stroke: 'black'
        };
        let unSelectedStyle = {
            fill: 'black',
            strokeWidth: 1,
            stroke: 'black'
        };

        let figures = [];
        for (let i = 1; i <= this.props.count; i++) {
            figures.push(
                <g id={'box-' + i} className={'class'}>
                    {/*                    <svg width="55" height="55" style={i > this.props.selected ? selectedStyle : unSelectedStyle}>
                        <rect width="50" height="50" className={'testBox'}/>
                        Sorry, your browser does not support inline SVG.
                    </svg>*/}

                    <img src={'carrot.svg'} className={'gulrotBilde'}/>
                </g>
            )
        }
        return figures;
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
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    handleChange = sliderValues => {
        this.setState({number: sliderValues});
    };

    render() {
        let sliderMin = 1;
        let sliderMax = 100;
        return (
            <div className={'container'}>
                <div className={'col'}>
                    <div>
                        <Slider className={'gulrotSlider mx-auto'}
                                min={sliderMin}
                                max={sliderMax}
                                defaultValue={0}
                                handle={handle}
                                dots={false}
                                onChange={this.handleChange}/>

                        <div className={'figurListe mx-auto'}><
                            FigureList selected={this.state.number} count={sliderMax}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withGlobalState(SliderComponent);