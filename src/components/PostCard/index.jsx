import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';
import userIcon from '../../images/user-icon.svg'
import { CardWrapper, CardImage, CommentsContainer, Comment, Button } from './styles';

function PostCard({ post, commentsButtonClick, isShowComments}) {
    const navigate = useNavigate();
    const { isLoadingComments, comments } = useSelector((state) => state.comments);
    
    return (
        <CardWrapper>
            <Card.Body>
                <Card.Title>
                    <CardImage
                        onClick={() => navigate(`/user/${post.id}`)}
                        src={userIcon}
                        variant="top"
                    />
                    {post.title}
                </Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button
                    variant="primary"
                    onClick={commentsButtonClick}
                    disabled={isLoadingComments}
                >
                    {isShowComments ? 'Скрыть комментарии' : 'Показать комментарии'}
                </Button>

                {isShowComments &&
                    <CommentsContainer>
                        {isLoadingComments
                            ? <Spinner animation="border" variant="primary" />
                            : comments.map((el, i) => (
                                <Comment key={post.id + i}>
                                    <h4>{el.email}</h4>
                                    <p>{el.body}</p>
                                </Comment>
                            ))}
                    </CommentsContainer>
                }
            </Card.Body>
        </CardWrapper>
  );
}

export default PostCard;
