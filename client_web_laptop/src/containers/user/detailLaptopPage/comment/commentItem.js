import React, { Component } from 'react';
import { Col, Row, PopoverBody, Popover, Input, Button, 
    FormGroup ,Form, Modal, ModalBody, ModalFooter} from 'reactstrap';
import './commentItem.css';
import { updateComment, deleteComment } from '../../../../actions/commentAction';
import { connect } from 'react-redux';

class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
            updating : false,
            contentComment : this.props.comment.content,
            deleteConfirm : false
        }
        this.togglePopover = this.togglePopover.bind(this);
        this.handleChooseUpdate = this.handleChooseUpdate.bind(this);
        this.handleChangeContentComment = this.handleChangeContentComment.bind(this);
        this.handleUpdateComment = this.handleUpdateComment.bind(this);
        this.confirmDeleteComment = this.confirmDeleteComment.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    togglePopover(commentID) {
        this.setState((preState) => ({
            isOpen : !preState.isOpen
        }));
        this.props.onPopover(commentID);
    }
    handleChooseUpdate() {
        this.setState((preState) => ({
            updating : !preState.updating,
            isOpen : false,
            contentComment : this.props.comment.content
        }));
    }

    handleChangeContentComment(e) {
        this.setState({
            contentComment : e.target.value
        })
    }

    handleUpdateComment() {
        const data = {
            id : this.props.comment.id,
            content : this.state.contentComment
        }
        this.props.updateComment(data);
        this.setState({    
            updating : false
        });
    }
    confirmDeleteComment() {
        this.setState({
            deleteConfirm : true,
            isOpen : false
        })
    }
    handleDeleteComment() {
        this.props.deleteComment(this.props.comment.id);
    }
    closeModal() {
        this.setState({
            deleteConfirm : false,
        })
    }
    render() {
        const comment = this.props.comment;
        const isoDatetime = comment.createdAt;
        let timeComment = new Date(isoDatetime);
        timeComment = timeComment.toLocaleDateString() + " " + timeComment.toLocaleTimeString();
        return (
            <div>
                {
                    this.state.updating 
                    ?
                    <div className="comment-item" style={{padding : "0.5rem 0"}}>
                        <Row>
                            <Col sm="1">
                                <img style={{borderRadius : "50%", height : "100%"}} src="https://www.phucanh.vn/template/2019/images/noavatar.jpg" alt="erros"/>
                            </Col>
                            <Col sm="11" style={{paddingTop : "0.5rem", borderRadius : "16px", backgroundColor : "#F2F3F5"}}>
                                <Form inline>
                                    <FormGroup>
                                        <Input 
                                            bsSize="sm" 
                                            type="text"
                                            value={this.state.contentComment}    
                                            onChange={this.handleChangeContentComment}
                                        />
                                        <Button size="sm" onClick={this.handleUpdateComment}>OK</Button>
                                        <Button size="sm" onClick={this.handleChooseUpdate}>Hủy</Button>  
                                    </FormGroup>
                                </Form>  
                            </Col>      
                        </Row>
                        <Row>
                            <Col sm="1">
                            </Col>
                            <Col sm="11">
                                <p style={{fontSize : "0.8rem", color : "#606770"}}>{timeComment}</p>
                            </Col>
                        </Row>
                    </div>
                    :  
                    <div className="comment-item" style={{padding : "0.5rem 0"}}>
                        <Row>
                            <Col sm="1">
                                <img style={{borderRadius : "50%", height : "100%"}} src="https://www.phucanh.vn/template/2019/images/noavatar.jpg" alt="erros"/>
                            </Col>
                            <Col sm="11" style={{paddingTop : "0.5rem", borderRadius : "16px", backgroundColor : "#F2F3F5"}}>
                                <span>
                                    <p>
                                        <a href="/">{comment.user.name} </a>
                                            {comment.content}
                                        <i className="fas fa-ellipsis-h" id={`popover${comment.id}`} style={{float : "right"}}></i>
                                    </p>
                                </span>
                            </Col>      
                        </Row>
                        <Row>
                            <Col sm="1">
                            </Col>
                            <Col sm="11">
                                <p style={{fontSize : "0.8rem", color : "#606770"}}>{timeComment}</p>
                            </Col>
                        </Row>
                        {
                            Number(localStorage.getItem('id')) === comment.user_id
                            ?
                            <Popover 
                                isOpen={comment.id === this.props.commentIDActive ? this.state.isOpen : false} 
                                placement="right" 
                                target={`popover${comment.id}`}
                                toggle={() => this.togglePopover(comment.id)}
                            >
                                <PopoverBody>
                                <p className="icon-comment" style={{ cursor : "pointer"}} onClick={this.handleChooseUpdate}>Chỉnh sửa...</p>
                                <p className="icon-comment" style={{ cursor : "pointer"}} onClick={this.confirmDeleteComment}>Xóa...</p>
                                </PopoverBody>
                            </Popover>
                            :
                            <Popover 
                                isOpen={comment.id === this.props.commentIDActive ? this.state.isOpen : false} 
                                placement="right" 
                                target={`popover${comment.id}`}
                                toggle={() => this.togglePopover(comment.id)}
                            >
                                <PopoverBody>
                                    <p className="icon-comment" style={{ cursor : "pointer"}}>Báo cáo vi phạm</p>
                                </PopoverBody>
                            </Popover>
                        }
                    </div>
                }    
                <Modal isOpen={this.state.deleteConfirm} toggle={this.closeModal}>
                    <ModalBody>
                        Bạn có muốn xóa bình luận?
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor : "#43A892"}} onClick={this.handleDeleteComment}>OK</Button>
                        <Button color="secondary" onClick={this.closeModal}>Hủy</Button>
                    </ModalFooter>
                </Modal>           
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateComment : (data) => dispatch(updateComment(data)),
    deleteComment : (id) => dispatch(deleteComment(id))
});

export default connect(null, mapDispatchToProps)(CommentItem);