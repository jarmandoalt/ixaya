import Axios from 'axios'

const baseUrl = 'https://sandbox.ixaya.net/api'

export async function getProducts () {
  
  try {
    const response = await Axios({
      url: `${baseUrl}/products`,
      method: 'GET', params: {
        "X-API-KEY": "kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4"
    }
    })

    return response
  } catch (e) {
    console.log(e)
  }
}

export async function getOrders () {
  
  try {
    const response = await Axios({
      url: `${baseUrl}/orders`,
      method: 'GET', params: {
        "X-API-KEY": "kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4"
    }
    })

    return response
  } catch (e) {
    console.log(e)
  }
}

export async function postOrder (dataNewOrder) {
  console.log(dataNewOrder);
  try {
    const response = await Axios({
      url: `${baseUrl}/orders/create`,
      method: 'POST', 
      data: dataNewOrder,
      headers: {
        "X-API-KEY": "kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4",
    }
    })

    return response
  } catch (e) {
    console.log(e)
  }
}
