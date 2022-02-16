import { IHits } from "../common/IHits";
import fetch from "node-fetch";

export class PostService{
    public async fetchPosts(pageNum:number):Promise<any>{
        const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=rage=story&page=${pageNum}`);
        const result = await response.json();
        
        console.log(result)
        return result;

    }
}