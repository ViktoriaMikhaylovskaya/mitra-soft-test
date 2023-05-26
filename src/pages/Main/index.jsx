import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Pagination, Spinner } from 'react-bootstrap';
import { PageWrapper, CardWrapper, SearchWrapper, Search } from './styles';
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Menu from "../../components/Menu";
import clearIcon from '../../images/clear-icon.svg';

import { getComments, getPosts, getPostsCount } from "../../redux/actions/actionCreator";

function Main() {
  const dispatch = useDispatch();
  const { posts, isLoading, postsCount } = useSelector((state) => state.posts);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [postIdWithOpenedComments, setPostIdWithOpenedComments] = useState();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const showMenuHandler = () => setIsShowMenu(!isShowMenu);

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

  const searchPostsByTitle = () => { 
    dispatch(getPosts({
      searchValue: searchValue ? `?title_like=${searchValue}` : '',
      page: searchValue ? `&_start=${currentPage}&_limit=5` : `?_start=${currentPage}&_limit=5`
    }));
  }

  useEffect(() => {
    searchPostsByTitle();
    dispatch(getPostsCount({
      searchValue: searchValue ? `?title_like=!!!!` : '',
    }));
  }, []);

  useEffect(() => { 
    searchPostsByTitle(searchValue, currentPage);
  }, [searchValue, currentPage])
    
  return (
      <PageWrapper>
        <Menu isShow={isShowMenu} handleClose={showMenuHandler} />
        <Header onClick={showMenuHandler} title='Posts' buttonText='Menu' />
        <SearchWrapper>
          <Search
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setCurrentPage(0);
              setSearchValue(e.target.value);
            }}
          />

          <Button
            variant="light"
            onClick={() => { 
              setSearchValue('');
              setCurrentPage(0);
            }}>
            <img src={clearIcon} alt="Очистка" width={30}/>
          </Button>
        
        </SearchWrapper>
        
        {isLoading
          ? <Spinner animation="border" variant="primary" />
          : <CardWrapper>
              {posts && posts.length > 0 && posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  commentsButtonClick={() => showCommentsHandler(post.id)}
                  isShowComments={isOpenComments && postIdWithOpenedComments === post.id}
                />
              ))}
          </CardWrapper>
        }

        <Pagination size='lg'>
          <Pagination.Prev disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage-1)}/>
          <Pagination.Item>{currentPage + 1}</Pagination.Item>
          {postsCount > 4 && <Pagination.Ellipsis />}
          <Pagination.Next disabled={currentPage === Math.ceil(postsCount/5)} onClick={() => setCurrentPage(currentPage+1)}/>
        </Pagination>

      </PageWrapper>
  );
}

export default Main;
