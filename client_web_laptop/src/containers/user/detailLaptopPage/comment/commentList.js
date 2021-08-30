import React, { Component } from 'react';
import { Row, Col, Button, Input, Form, FormGroup, Popover, PopoverBody, Modal, ModalBody, ModalFooter } from 'reactstrap';
import CommentItem from './commentItem';
import { getAllComment, addComment } from '../../../../actions/commentAction';
import { connect } from 'react-redux';


class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: true,
            commentIDActive: 0,
            commentContent: '',
            isOpen: false,
            isSuggestLogin: false
        }
        this.toggleComment = this.toggleComment.bind(this);
        this.handlePopover = this.handlePopover.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.toggleFocus = this.toggleFocus.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    componentDidMount() {
        this.props.getAllComment(this.props.idLaptop);
    }
    toggleComment() {
        this.setState((preState) => ({
            showComment: !preState.showComment
        }));
    }
    handlePopover(commentID) {
        this.setState(() => ({
            commentIDActive: commentID
        }));
    }
    handleAddComment(e) {
        if (!localStorage.getItem("signined") || localStorage.getItem("signined") === false) {
            this.setState({
                isSuggestLogin: true
            });
            e.preventDefault();
        } else if (this.state.commentContent.length === 0) {
            this.setState({
                isOpen: true
            })
            e.preventDefault();
        } else {
            const data = {
                content: this.state.commentContent,
                laptop_id: this.props.idLaptop
            }
            this.props.addComment(data);
            this.setState({
                commentContent: ''
            })
        }
    }
    handleChangeComment(e) {
        this.setState({
            commentContent: e.target.value
        })
    }

    toggleFocus() {
        if (this.state.commentContent.length === 0) {
            this.setState({
                isOpen: false
            });
        }
    }

    toggleModal() {
        this.setState((preState) => ({
            isSuggestLogin: !preState.isSuggestLogin
        }));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comment.apiCallDone && (nextProps.comment.apiCallDone !== this.props.comment.apiCallDone)) {
            this.props.getAllComment(this.props.idLaptop);
        }
    }

    render() {
        console.log("xoa xong roi do dung im")
        const comments = this.props.comment.comments;
        return (
            <div className="comment-list" style={{ backgroundColor: "#FFFFFF", padding: "1rem" }}>
                <div className="comment-title"><b>BÌNH LUẬN VỀ SẢN PHẨM</b></div>
                <div className="comment-post" style={{ padding: "1rem" }}>
                    <Row>
                        <Col sm="12">
                            <div>
                                <p>Tổng số bình luận:  <b>{comments.length} </b>
                                    {
                                        this.state.showComment
                                            ?
                                            <Button color="secondary" size="sm" onClick={this.toggleComment}>Ẩn</Button>
                                            :
                                            <Button style={{ backgroundColor: "#43A892" }} size="sm" onClick={this.toggleComment}>Hiện</Button>
                                    }
                                </p>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="1">
                            <img style={{ borderRadius: "50%" }} src="https://www.phucanh.vn/template/2019/images/noavatar.jpg" alt="erros" />
                        </Col>
                        <Col sm="11">
                            <Form>
                                <FormGroup>
                                    <Input
                                        type="textarea"
                                        style={{ backgroundColor: "#f2f3f5", borderRadius: "16px" }}
                                        placeholder="Viết bình luận..."
                                        onChange={this.handleChangeComment}
                                        value={this.state.commentContent}
                                        onFocus={this.toggleFocus}
                                    />
                                </FormGroup>
                                <Button id="popover-button" onClick={this.handleAddComment} style={{ backgroundColor: "#43A892" }}>Bình luận</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
                {
                    this.state.showComment
                        ?
                        <div className="comment-box" style={{ padding: "1rem", borderRadius: "5px", border: "solid 1px #DDDDDD" }}>
                            {
                                comments.map((comment) =>
                                    <CommentItem
                                        comment={comment}
                                        key={comment.id}
                                        onPopover={this.handlePopover}
                                        commentIDActive={this.state.commentIDActive}
                                    />)
                            }
                        </div>
                        :
                        ""
                }
                <Popover
                    isOpen={this.state.isOpen}
                    placement="right"
                    target="popover-button"
                >
                    <PopoverBody>
                        Vui lòng nhập comment
                    </PopoverBody>
                </Popover>
                <Modal isOpen={this.state.isSuggestLogin}>
                    <ModalBody>
                        Bạn cần đăng nhập để  bình luận hoặc đánh gía sản phẩm
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#43A892" }} onClick={this.toggleModal}><a href="/login" style={{ textDecoration: "none", color: "#FFFF" }}>Đăng nhập</a></Button>
                        <Button style={{ backgroundColor: "#43A892" }} onClick={this.toggleModal}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    comment: state.comment
});

const mapDispatchToProps = (dispatch) => ({
    getAllComment: (id) => dispatch(getAllComment(id)),
    addComment: (data) => dispatch(addComment(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentList);