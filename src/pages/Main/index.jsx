import { useState } from "react";
import { Spinner } from 'react-bootstrap';
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Menu from "../../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/actions/actionCreator";
import { PageWrapper, CardWrapper } from './styles';

function Main() {
  const dispatch = useDispatch();
  const {posts, comments} = useSelector((state) => state.posts);
  const [openedComments, setOpenedComments] = useState();
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showMenuHandler = () => setIsShowMenu(!isShowMenu);

  const showCommentsHandler = (id) => { 
    setOpenedComments(id);
    dispatch(getComments(id));
    setIsOpenComments(!isOpenComments);
  }
    
  return (
    <PageWrapper>

      <Header onClick={showMenuHandler} title='Posts' buttonText='Menu' />
      <Menu isShow={isShowMenu} handleClose={showMenuHandler} />
      
      {isLoading
        ? <Spinner animation="border" variant="primary" />
        : <CardWrapper>
            {posts && posts.length > 0 && posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                commentsButtonClick={() => showCommentsHandler(post.id)}
                isShowComments={isOpenComments && openedComments === post.id}
                comments={comments ? comments : []}
              />
            ))}
        </CardWrapper>
      }

    </PageWrapper>
  );
}

export default Main;
