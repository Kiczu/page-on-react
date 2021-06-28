import React, { Component } from "react";
import "./_threeColumns.scss";

class ThreeColumns extends Component {
    render() {
        return(
            <>
                <section id="test" className="threeColumns">
                    <div className="threeColumns__element">
                        <div className="threeColumns__count">
                            10
                        </div>
                        <div className="threeColumns__title">
                            Oddanych worków
                        </div>
                        <div className="threeColumns__description">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </div>
                    </div>
                    <div className="threeColumns__element">
                        <div className="threeColumns__count">
                            5
                        </div>
                        <div className="threeColumns__title">
                            Wspartych organizacji
                        </div>
                        <div className="threeColumns__description">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </div>
                    </div>
                    <div className="threeColumns__element">
                        <div className="threeColumns__count">
                            7
                        </div>
                        <div className="threeColumns__title">
                            Zorganizowanych zbiórek
                        </div>
                        <div className="threeColumns__description">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default ThreeColumns;