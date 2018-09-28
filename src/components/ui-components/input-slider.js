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
            strokeWidth: 0.5,
            stroke: 'black'
        };
        let unSelectedStyle = {
            fill: 'black',
            strokeWidth: 0.5,
            stroke: 'black'
        };

        let figures = [];
        for (let i = 1; i <= this.props.count; i++) {
            figures.push(
                <g id={'box-' + i} className={'class'}>
                    <svg className={"gulrotBilde"} viewBox={'0 0 100 100'}>
                        <path
                            style={i > this.props.selected ? selectedStyle : unSelectedStyle}
                            d={"M54.3353081,11.6657c-0.2977982-1.7002001-3.2206993-2.3066998-8.7030983-1.8095999\n" +
                            "\tc1.0585976-1.9668002,2.3485985-4.9190001,2.2245979-6.7920003c-0.0858994-1.2930001-0.7411995-1.9121001-1.2773972-2.2051001\n" +
                            "\tc-1.5195007-0.8301-3.8134003,1.0821-6.8388023,5.6718998c-0.8681984-2.0419998-2.3544998-4.8652-3.9003983-5.9540997\n" +
                            "\tc-1.0741997-0.7568001-1.9766006-0.6328-2.5439987-0.3936c-1.7568016,0.7393-1.5039024,4.2997999,0.7519989,10.5839996\n" +
                            "\tc-0.2560997,0.9745998-0.6221008,2.9246998-1.3440018,6.8249006c-1.5675983-0.6312008-3.3156986-0.6716003-4.9264832-0.0778008\n" +
                            "\tc-1.9169998,0.7060013-3.4102154,2.2158012-4.0967159,4.142601L9.7669096,60.8140984\n" +
                            "\tc-0.3856993,1.0869026,0.0596008,2.2930031,1.0567007,2.8672028c0.3729992,0.2157974,0.7841997,0.3193016,1.1913996,0.3193016\n" +
                            "\tc0.6815996,0,1.3515997-0.2910042,1.8184004-0.8398018l26.9540997-31.6280003\n" +
                            "\tc1.3270988-1.5576,1.8885994-3.6054001,1.5400009-5.6181011c-0.296402-1.7220993-1.2310028-3.2402-2.6006012-4.2852001\n" +
                            "\tc0.8223-0.6802998,2.3219986-2.0678005,5.3261986-4.852499c1.8164024-0.1718998,6.5088005-1.0430002,8.3642006-2.7481003\n" +
                            "\tC54.3656082,13.1588001,54.4398079,12.2632999,54.3353081,11.6657z M40.3568077,26.2554989\n" +
                            "\tc0.2471008,1.4258003-0.1513977,2.8770008-1.0907974,3.9805012L36.70961,33.2355003l-3.7150993-2.1450005\n" +
                            "\tc-0.4776001-0.277401-1.089901-0.1133003-1.3662014,0.3661995c-0.2763996,0.4785004-0.112299,1.0898018,0.3661995,1.3661995\n" +
                            "\tl3.3957005,1.960701L25.503809,46.3838997l-1.6000843-0.9243011c-0.4785156-0.2763977-1.0899143-0.1133003-1.3662148,0.3661995\n" +
                            "\tc-0.2763996,0.4785004-0.1123009,1.089901,0.3662148,1.3662033L24.1844101,47.9319L12.3109102,61.8638992\n" +
                            "\tc-0.1191006,0.1436005-0.3251858,0.1807022-0.4883003,0.0849991c-0.1620998-0.0937996-0.2334003-0.2890968-0.1708851-0.4648972\n" +
                            "\tl9.1376848-25.7157021l3.4824009,2.010601c0.157299,0.0909004,0.3290997,0.1338005,0.4990997,0.1338005\n" +
                            "\tc0.3456993,0,0.6815987-0.1786995,0.8670998-0.5c0.2763996-0.4785004,0.112299-1.0898018-0.3662014-1.3661995l-3.7733994-2.1787033\n" +
                            "\tc-0.0095005-0.005497-0.0202999-0.0048981-0.0299988-0.0100975l4.0973988-11.530901\n" +
                            "\tc0.4862995-1.3652,1.5439148-2.4356003,2.9032993-2.9356003c1.3584003-0.5009003,2.8574009-0.3739986,4.1123009,0.3516006\n" +
                            "\tl5.4141006,3.125C39.250309,23.5923996,40.1107254,24.8267994,40.3568077,26.2554989z M52.2435074,12.3648996\n" +
                            "\tc-1.107399,1.4345999-6.3964996,2.3544998-7.6854973,2.4658003c-0.2334023,0.0107002-0.4580002,0.1025-0.6338005,0.2656002\n" +
                            "\tc-1.7901001,1.6591988-4.5732994,4.2276001-5.5224838,5.0771999c-0.7346153-0.1480999-1.6982155-0.3882008-2.1299171-0.6100998\n" +
                            "\tl-0.0458984-0.0265007c-0.4560013-0.2537994-1.1928024-0.9195995-1.6035004-1.3234005\n" +
                            "\tc0.5136986-2.7626991,1.264698-6.7655993,1.3857994-7.2821989c0.0693016-0.2110004,0.0663986-0.4414005-0.0098-0.6533003\n" +
                            "\tc-1.3065987-3.6075001-2.1259995-7.3711004-1.8163986-8.2774c0.0643997,0.0039001,0.1425972,0.0127001,0.2617149,0.0664001\n" +
                            "\tc1.6513824,0.7637,3.7167854,5.7040997,4.1122818,6.9385004c0.0879021,0.3232002,0.3350029,0.5879002,0.6670036,0.6924\n" +
                            "\tc0.4394989,0.1357002,0.9110985-0.0419998,1.1503983-0.4326c2.0059013-3.2705002,4.4365005-6.2568998,5.3378983-6.5811\n" +
                            "\tc0.0390015,0.0458999,0.080101,0.1192,0.1113014,0.2470999c0.4317017,1.7637-2.1445007,6.4628997-2.8623009,7.5420003\n" +
                            "\tc-0.1982002,0.2723999-0.2509995,0.6328001-0.1221008,0.9589996c0.1680031,0.4217997,0.5850029,0.6796999,1.052803,0.6230001\n" +
                            "\tc3.8085976-0.4696999,7.6591988-0.4315996,8.4755974,0.0692997C52.3548088,12.1831999,52.3226089,12.2613993,52.2435074,12.3648996z"}/>
                    </svg>
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
        let sliderMin = 0;
        let sliderMax = 50;
        return (
            <div className={'container'}>
                <div className={'col'}>
                    <div>
                        <h3>Hvor stor andel av innbyggere i din kommune spise grønnsaker hver dag?</h3>
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
                <div className={'container'}>
                    <div className={'col'}>
                        <button className={'mx-auto svarknapp btn btn-lg btn-primary'}>Besvar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withGlobalState(SliderComponent);