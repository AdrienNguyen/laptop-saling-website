import { API_CALLING, GET_LAPTOPS, GET_LAPTOP, FILTER_LAPTOP_BY_BRAND } from '../actionTypes';
import axios from 'axios';

export const getAllLaptop = () => dispatch => {
    dispatch({
        type: API_CALLING
    });
    axios.get('https://laptop-adrien-nguyen.herokuapp.com/api/laptop').then(function (res) {
        dispatch({
            type: GET_LAPTOPS,
            payload: res.data
        });
    }).catch(function (error) {
        console.log(error.response);
    });

}

// export const getDetailLaptop = (id) => dispatch => {
//     dispatch({
//         type : API_CALLING
//     });
//     axios.get('/api/laptop/' + id).then(function(res){
//         dispatch({
//             type : GET_LAPTOP,
//             payload : res.data
//         })
//     }).catch(function(error){
//         console.log(error.response);
//     });  
// }

export const getDetailLaptop = (id) => (
    async dispatch => {
        await dispatch({
            type: API_CALLING
        });
        const response = await fetch("https://laptop-adrien-nguyen.herokuapp.com/api/laptop/" + id);
        const data = await response.json();
        if (data.success === true) {
            const payload = data
            await dispatch({
                type: GET_LAPTOP,
                payload
            })
        } else {
            console.log("Error get game")
        }
    }
)

export const filterLaptopByBrand = (brand) => dispatch => {
    dispatch({
        type: API_CALLING
    });
    axios.get('https://laptop-adrien-nguyen.herokuapp.com/api/laptop/brand', {
        params: {
            brand: brand
        }
    }).then(function (res) {
        dispatch({
            type: FILTER_LAPTOP_BY_BRAND,
            payload: res.data
        })
    }).catch((error) => {
        console.log("o goi loi nay");
    });
}