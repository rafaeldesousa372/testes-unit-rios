import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ],
        providers: [
        PostService
        ],
    });
    
    postService = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(postService).toBeTruthy();
  });

  it(`should fetch posts as an Observable`, (inject([HttpTestingController, PostService],
      
    (httpClient: HttpTestingController, postService: PostService) => {
      
      const postItem = [

      {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quastotam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihiL reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellatqui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
    ];
    
    postService.getPosts().subscribe((posts: any) => {

      expect(posts.length).toBe(3);
      });
      
      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
      expect(req.request.method).toBe("GET");
      
      req.flush(postItem);
      httpMock.verify();
    }
  )));

});
