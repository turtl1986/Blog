import Api from "../api";
import { BlogSingle } from "./types";


class BlogSingleApi extends Api{
    endpointOne=`ictures/`
  async fetchOne(id:string|undefined): Promise<BlogSingle[]>{
    const {data}=await this.api.get<BlogSingle[]>(this.endpointOne +`${id}`);
    return data
  }
  
}

export default new BlogSingleApi()