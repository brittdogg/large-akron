import { PostService } from "../../ts/service/post-service";
import { Post } from "../../ts/dto/post";
import assert = require('assert');


const ipfsClient = require('ipfs-http-client')

const ipfs = ipfsClient({
    host: "localhost",
    port: 5001,
    protocol: 'http'
})

//@ts-ignore
contract('PostService', async (accounts) => {

    let postService: PostService = new PostService()
    

    //@ts-ignore
    it("Test create & get", async () => {

        //Arrange
        let post: Post = new Post()
        post.title = "Hello world"
        post.subtitle = "Again. Hello. World."


        //Act
        let created: Post = await postService.create(post)
        
        //Assert
        let fetched: Post = await postService.read(created.id)    

        assert.equal(fetched.title, "Hello world")
        assert.equal(fetched.subtitle, "Again. Hello. World.")
        assert.equal(fetched.id != undefined, true)
        assert.equal(fetched.ipfsCid != undefined, true)
    })

})
