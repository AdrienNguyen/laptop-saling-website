import React, { Component } from 'react';
import ListBrand from '../../../components/brand/listBrand';
import LaptopInfo from './laptopInfo/laptopInfo';
import LaptopDetail from '../../../components/laptop/laptopDetail';
import CommentList from './comment/commentList';
import Evaluation from './evaluation/evaluation';
import LaptopSuggestionList from '../../../components/laptop/laptopSuggestionList';
import { getDetailLaptop } from '../../../actions/laptopAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { filterLaptopByBrand } from '../../../actions/laptopAction';
import { Row, Col } from 'reactstrap';


class DetailLaptopContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laptopSuggestions: []
        }
    }
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getDetailLaptop(this.props.match.params.id);
        }
        if (localStorage.getItem("brand")) {
            this.props.filterLaptopByBrand(localStorage.getItem("brand"));
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.laptop.laptop !== this.props.laptop.laptop) {
            const suggestions = this.props.laptop.laptopSuggestions.filter(x => x.id !== nextProps.laptop.laptop.id);
            this.setState({
                laptopSuggestions: suggestions
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <LaptopInfo laptop={this.props.laptop.laptop} />
                <LaptopSuggestionList laptopSuggestions={this.state.laptopSuggestions} />
                <LaptopDetail laptop={this.props.laptop.laptop} />
                <Row style={{ marginTop: "1rem" }}>
                    <Col sm="12">
                        <CommentList idLaptop={this.props.match.params.id} />
                    </Col>
                    {/* <Col sm="4">
                        <Evaluation />
                    </Col> */}
                </Row>
                <ListBrand />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    laptop: state.laptop
});

const mapDispatchToProps = (dispatch) => ({
    getDetailLaptop: (id) => dispatch(getDetailLaptop(id)),
    filterLaptopByBrand: (brand) => dispatch(filterLaptopByBrand(brand)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailLaptopContent));