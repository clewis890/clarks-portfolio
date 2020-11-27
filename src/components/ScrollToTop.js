import React, { Component } from 'react';

export default class ScrollToTop extends Component {
    constructor(props) {
        super();
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <div className="scroller" onClick={() => this.scrollToTop()}>
                       <button><ion-icon name="chevron-up-circle-outline" className="ion-scroll"></ion-icon></button>
                    </div>
                )}
            </div>
        );
    }
}
