import Api from "../api";
import { BlogAll } from "./types";

class BlogsApi extends Api{
    endpointAll='ictures'
  async fetchAll(): Promise<BlogAll[]>{
    const {data}=await this.api.get<BlogAll[]>(this.endpointAll)
    return data
  }
  
}

export default new BlogsApi()