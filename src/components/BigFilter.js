import React from 'react'
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';
import { MY_API_KEY} from '../global';
import { useEffect, useState } from 'react';
import Movie from './Movie';



const BigFilter = () => {

    const [total, setTotal] = useState(0);
    const [ sort, setSort] = useState();
    const { Option } = Select;
    const [ year, setYear ] = useState('');
    const [ genreOptions, setGenreOptions] = useState([]);
    const [discover, setDiscover] = useState([])
    const [genre, setGenre] =useState()

    
    
    function handleChange(value) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };

    function handleChange2(value) {
        console.log(`${value}`);
        setGenre(`${value}`)
    };

    const handleSortChange = (newValue) => {
        setSort(newValue.value);
        console.log(newValue);
    };  


    const sortOptions = [ 
        { value:  'popularity.asc', label: 'Popularity' },
        { value: 'release_date.asc', label: 'Release Date' },
        { value: 'revenue.asc', label: 'Budget' },
        { value: 'vote_average.asc', label: 'Rating' },
        { value: 'original_title.asc', label: 'Title' }
    ];
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MY_API_KEY}`)
        .then(res => res.json())
        .then(data => {
           setGenreOptions(data.genres);
            console.log(data)
        });
    }, []);

const handleDiscover = () =>{
  
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&page=1&year=${year}&with_genres=${genre}`)
    .then(res => res.json())
    .then(data => {
        setDiscover(data.results);
        console.log(data);
        setTotal(data.total_results);
    });
}

 const mappedDisc = discover.map((el) =>(
    <Movie key={el.id} movieobj={el}/>
)
)

    const handleYearChange = (date, dateString) => {
        setYear(dateString);
        console.log( dateString);
      };

    

    const newArr = genreOptions.map(el => {
        return { value: el.id, label:el.name}
    });
 

    return (
        <div>
            <div>
                <DatePicker onChange={handleYearChange} picker="year" />
                    <label>Sort by</label>
                <Select
                    labelInValue
                    defaultValue={{ value: 'title' }}
                    style={{ width: 120 }}
                    onChange={handleSortChange}
                    options={sortOptions}
                    />
                
                    {/* <Option value="title">Title</Option>
                    <Option value="popularity">Popularity</Option>
                    <Option value="date-release">Date-release</Option>
                    <Option value="vote-avarage">Vote-avarage</Option>
                    <Option value="vote-count">Vote-count</Option> */}
                {/* </Select> */}

                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Genres"
                    onChange={handleChange2}
                    optionLabelProp="label"
                    options={newArr}
                />
                <button onClick={handleDiscover} className="search-btn">Discover</button>
                <h2>Found: {total}movies</h2>
            </div>
                    {mappedDisc}
        </div>
    )
}

export default BigFilter
