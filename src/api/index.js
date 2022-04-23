import axios from 'axios';

const apiKey='a8ccf9e2-1ffc-4651-b7a0-b4ca8f226514';

//https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=5

const apiEndPoint = 'https://api.thecatapi.com/v1';
const breeds='/breeds'
const images = '/images';
const search='/search'


const fetchBreeds = async(page, limit) => {
    try {
        
        const result = await axios({
            method:'get',
            url: `${apiEndPoint}${breeds}`,
            headers: {'x-api-key': apiKey},
            params:{
                page:page,
                limit:limit,
            }
            
          });
          //console.log(result);
          return result;
        
    } catch (error) {
        console.log(error);
    }
}

const fetchSearchBreed =async (query, page, limit) => {

    try {

        const result = await axios({
            method:'get',
            url: `${apiEndPoint}${breeds}${search}`,
            headers: {'x-api-key': apiKey},
            params:{
                limit:70,
                q: query
            },
          });
          //console.log(result);
          return result;
        
    } catch (error) {

        console.log(error)
        
    }
}

const fetchSpesificImage = async(id) => {

    try {
        const result = await axios({
            method:'get',
            url: `${apiEndPoint}${images}/${id}`,
            headers: {'x-api-key': apiKey},
          });
          //console.log(result);
          return result;
        
    } catch (error) {
        console.log(error);
        
    }
}


const fetchBreedImages = async(id, limit) => {

    const result = await axios({
        method:'get',
        url: `${apiEndPoint}${images}${search}`,
        headers: {'x-api-key': apiKey},
        params:{
            breed_ids: id,
            limit:limit
        }
        
      });
      return result;
}

export default {fetchBreeds, fetchBreedImages, fetchSearchBreed, fetchSpesificImage};