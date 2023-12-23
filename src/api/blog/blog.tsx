import Api from '../api'
import { Blog } from './types';

class PostApi extends Api {
  endpointOne=`/v4/articles/`
  async fetchOne(id:string|undefined): Promise<Blog[]>{
    const {data}=await this.api.get<Blog[]>(this.endpointOne + `${id}`);
    return data
	}
}
export default new PostApi()