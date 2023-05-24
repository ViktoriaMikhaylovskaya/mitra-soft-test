import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PageWrapper, Spinner } from './styles';
import Header from "../../components/Header";
import PostCard from '../../components/PostCard/index.jsx';
import { getComments, getUserPosts } from "../../redux/actions/actionCreator";

function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userPosts, isLoading } = useSelector((state) => state.posts);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [postIdWithOpenedComments, setPostIdWithOpenedComments] = useState();

  const loadComments = (id) => { 
    setPostIdWithOpenedComments(id);
    setIsOpenComments(true);
    dispatch(getComments(id));
  }

  const showCommentsHandler = (id) => { 
    if (isOpenComments) {
      setIsOpenComments(false);
      if (id !== postIdWithOpenedComments) {
        loadComments(id);
      }
    } else {
      loadComments(id);
    }
  }

  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [id]);

  return (
    <PageWrapper>
      <Header onClick={() => navigate('/')} title='Your Post' buttonText='Назад' />
      {isLoading && <Spinner animation="border" variant="primary" />}
      
      {!isLoading && userPosts && userPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          commentsButtonClick={() => showCommentsHandler(post.id)}
          isShowComments={isOpenComments && postIdWithOpenedComments === post.id}
        />
      ))}
    </PageWrapper>
  );
}

export default User;
