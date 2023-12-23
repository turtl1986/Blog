import axios from 'axios'

class Api{
    private readonly BASE_URL='https://api.spaceflightnewsapi.net/'
protected api
constructor(){
    this.api=axios.create({
       baseURL: this.BASE_URL
       
    })
}
}

export default Api