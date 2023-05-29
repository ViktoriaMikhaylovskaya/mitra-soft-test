import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Pagination, Spinner, Dropdown } from 'react-bootstrap';
import { PageWrapper, CardWrapper, SearchWrapper, Search, Sort, SearchInput, NotFoundMessage } from './styles';
import { SORTING, ELEMENTS_PER_STEP } from '../../constants';
import { getQueriesBySort } from "../../utils";
import clearIcon from '../../images/clear-icon.svg';
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Menu from "../../components/Menu";
import { getComments, getPosts, getPostsCount } from "../../redux/actions/actionCreator";

function Main() {
  const dispatch = useDispatch();
  const { posts, isLoading, postsCount } = useSelector((state) => state.posts);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [postIdWithOpenedComments, setPostIdWithOpenedComments] = useState();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [startIndexForPagination, setStartIndexForPagination] = useState(1);
  const [elementsPerStep, setElementsPerStep] = useState(0);
  const [sortType, setSortType] = useState(SORTING.DEFAULT);

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
    const sort = getQueriesBySort(sortType);
    dispatch(getPosts({
      page: `?_start=${elementsPerStep}&_limit=5`,
      searchValue: searchValue ? `&title_like=${searchValue}` : '',
      sort
    }));
  }

  useEffect(() => {
    searchPostsByTitle();
    dispatch(getPostsCount({
      searchValue: searchValue ? `?title_like=${searchValue}` : '',
    }));
  }, [searchValue, elementsPerStep, sortType])
    
  return (
      <PageWrapper>
        <Menu isShow={isShowMenu} handleClose={showMenuHandler} />
        <Header onClick={showMenuHandler} title='Posts' buttonText='Menu' />
        <SearchWrapper>
          <Search>
            <SearchInput
              placeholder="Search"
              value={searchValue}
              onChange={(e) => {
                setElementsPerStep(0);
                setSearchValue(e.target.value);
                setStartIndexForPagination(1);
              }}
            />
            <Button
              variant="light"
              onClick={() => { 
                setSearchValue('');
                setElementsPerStep(0);
                setStartIndexForPagination(1);
              }}>
              <img src={clearIcon} alt="Очистка" width={30}/>
            </Button>
        </Search>
        
          <Sort size='lg'>
            <Dropdown.Toggle>Sorting by title ({sortType})</Dropdown.Toggle>
            <Dropdown.Menu onClick={(e) => setSortType(e.target.innerText)}>
              {Object.values(SORTING).map((el) =>
                <Dropdown.Item key={el}>{el}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Sort>
        </SearchWrapper>
        
        {isLoading
          ? <Spinner animation="border" variant="primary" />
          : <CardWrapper>
              {posts && posts.length > 0 && posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  isHaveLink={true}
                  commentsButtonClick={() => showCommentsHandler(post.id)}
                  isShowComments={isOpenComments && postIdWithOpenedComments === post.id}
                />
              ))}
          </CardWrapper>
        }
      
      {posts?.length === 0 && searchValue && <NotFoundMessage>Ничего не найдено.</NotFoundMessage>}

        {posts?.length > 0 && 
        <Pagination size='lg'>
            <Pagination.Prev
              disabled={startIndexForPagination === 1}
              onClick={() => {
                setElementsPerStep(elementsPerStep - ELEMENTS_PER_STEP);
                setStartIndexForPagination(startIndexForPagination - 1);
              }} />
            <Pagination.Item>{startIndexForPagination}</Pagination.Item>
            <Pagination.Next
              disabled={startIndexForPagination === Math.ceil(postsCount / 5)}
              onClick={() => {
                setElementsPerStep(elementsPerStep + ELEMENTS_PER_STEP);
                setStartIndexForPagination(startIndexForPagination + 1);
              }} />
          </Pagination>
        }
      </PageWrapper>
  );
}

export default Main;
