/* eslint-disable react/prop-types */
// import TrendingBox from "./TrendingBox"
import {  useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {  searchProvider } from '../../data/constant';
import { apiSearch } from '../../services/apiSearch';

import Container from './../../components/ui/Container';
import TextBox from "./../../components/ui/TextBox";
import Box from "./../../components/ui/Box";

function SearchContainer() {
    const [data , setData] = useState([])
    const navigate =  useNavigate()
    const {query} = useContext(searchProvider) ;

    useEffect(function(){
       async function searchApiRequest() {
         const apiData = await apiSearch(query)
         setData(apiData.results)
            }
        searchApiRequest()
        
    },[query])

    if(data && data.length ===0) {
        navigate('/trending')
      }

    return (
        <Container>
                <TextBox heading='Search'/> 
                {data.map(item => <Box item={item} key={item.id}/>)}
         </Container>
    )
}

export default SearchContainer
