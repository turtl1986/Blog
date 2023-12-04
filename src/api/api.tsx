import axios from 'axios'

class Api{
    private readonly BASE_URL='https://64e66ab909e64530d17ffb2c.mockapi.io/'
protected api
constructor(){
    this.api=axios.create({
       baseURL: this.BASE_URL
       
    })
}
}

export default Api