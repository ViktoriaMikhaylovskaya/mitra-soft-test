import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Pagination, Dropdown } from "react-bootstrap";
import { PageWrapper,Spinner,SearchWrapper,Search,Sort,SearchInput,NotFoundMessage } from './styles';
import { SORTING, ELEMENTS_PER_STEP } from '../../constants';
import { getQueriesBySort } from "../../utils";
import clearIcon from '../../images/clear-icon.svg';
import Header from "../../components/Header";
import PostCard from '../../components/PostCard/index.jsx';
import { getComments, getUserPosts } from "../../redux/actions/actionCreator";

function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userPosts, isLoading, countUserPosts } = useSelector((state) => state.posts);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [postIdWithOpenedComments, setPostIdWithOpenedComments] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [startIndexForPagination, setStartIndexForPagination] = useState(1);
  const [elementsPerStep, setElementsPerStep] = useState(0);
  const [sortType, setSortType] = useState(SORTING.DEFAULT);

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
    dispatch(getUserPosts({
      id,
      sort,
      page: `&_start=${elementsPerStep}&_limit=5`,
      searchValue: searchValue ? `&title_like=${searchValue}` : '',
    }));
  }

  useEffect(() => {
    searchPostsByTitle();
  }, [id, searchValue, elementsPerStep, sortType])

  return (
    <PageWrapper>
      <Header onClick={() => navigate('/')} title='Your Post' buttonText='Назад' />

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
      {isLoading && <Spinner animation="border" variant="primary" />}
      
      {!isLoading && userPosts && userPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isHaveLink={false}
          commentsButtonClick={() => showCommentsHandler(post.id)}
          isShowComments={isOpenComments && postIdWithOpenedComments === post.id}
        />
      ))}

      {userPosts?.length === 0 && searchValue && <NotFoundMessage>Ничего не найдено.</NotFoundMessage>}
      {userPosts?.length > 0 && 
        <Pagination size='lg'>
          <Pagination.Prev
            disabled={startIndexForPagination === 1}
            onClick={() => {
              setElementsPerStep(elementsPerStep - ELEMENTS_PER_STEP);
              setStartIndexForPagination(startIndexForPagination - 1);
            }} />
          <Pagination.Item>{startIndexForPagination}</Pagination.Item>
          <Pagination.Next
            disabled={startIndexForPagination === Math.ceil(countUserPosts / 5)}
            onClick={() => {
              setElementsPerStep(elementsPerStep + ELEMENTS_PER_STEP);
              setStartIndexForPagination(startIndexForPagination + 1);
            }} />
        </Pagination>
      }
    </PageWrapper>
  );
}

export default User;
