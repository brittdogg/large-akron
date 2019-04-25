import { Post } from "../dto/post";

class PostService {

    constructor() {
        
    }


    async create(post: Post) : Promise<Post> {
        return null 
    }

    async read(id: number) : Promise<Post> {
        return null
    }

    async update(post: Post) : Promise<Post> {
        return null 
    }


}



export {
    PostService
}