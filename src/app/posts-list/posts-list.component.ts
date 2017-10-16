import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Post } from '../post';
import { User } from '../user';

@Component({
	selector: 'app-posts-list',
	templateUrl: './posts-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit {
	@Input() posts: Post[];

	/*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección del autor de un post y navega a la dirección correspondiente.  |
  | Recuerda que para hacer esto necesitas inyectar como dependencia el      |
  | Router de la app. La ruta a navegar es '/posts/users', pasando como      |
  | parámetro el identificador del autor.                                    |
  |=========================================================================*/

/* path: 'posts/:postId',
      component: PostDetailsComponent */
	constructor(public router: Router) {}  // ActivatedRoute) { }

	ngOnInit(): void {
		// Suscripción manual al observable
    //this._route.subscribe((params: Params) => { });
	}
  getPost(postId: number): void { 
    console.log(`Soy el padre y la ruta será /posts/${postId}`);
    this.router.navigate(['/posts', postId]);
  }
  getPostsByAuthor(postsAuthor: User): void {
    this.router.navigate(['/posts/users', postsAuthor.id]);
    console.log('/posts/users', postsAuthor);
    console.log('/posts/users/' + postsAuthor.id);
  }
	/*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección de un post y navega a la dirección correspondiente. Recuerda   |
  | que para hacer esto necesitas inyectar como dependencia el Router de la  |
  | app. La ruta a navegar es '/posts', pasando como parámetro el            |
  | identificador del post.                                                  |
  |=========================================================================*/
}
