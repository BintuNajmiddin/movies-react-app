// import Header from '../components/Header';
import Genres from '../components/Genres';
import MovieGrid from '../components/MovieGrid';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { StickyContainer, Sticky } from 'react-sticky';


const PageContent = styled.section`
padding:120px 0;
`;

const Wrapper = styled.div`
background-color:#16151A;
padding: 20px;
display:flex;
overflow: auto;
`;

const Catalog = () => {

    const {genreid} =useParams();
    return (
        <PageContent className="bg-img">
        <div className= 'container'>
             <Wrapper>
              <Genres/>
          <MovieGrid genre={genreid}/>
               </Wrapper> 
           </div>
        </PageContent>
            
    );
};

export default Catalog;