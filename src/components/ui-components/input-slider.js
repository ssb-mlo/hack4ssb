import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from  'react'
import {withGlobalState} from "react-globally";
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'

const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
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


class SliderComponent extends React.PureComponent {


    render(){
        return(
            <div className={'container'}>
                <div className={'col'}>
                    <div >
                        <p>Slider with custom handle</p>
                        <Slider min={0} max={20} defaultValue={3} handle={handle}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withGlobalState(SliderComponent);