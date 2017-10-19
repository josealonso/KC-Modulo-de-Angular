import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostsResolveService implements Resolve<Post[]> {
	constructor(private _postService: PostService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
		if (route.url[0].path === 'posts' && route.url[1] ? route.url[1].path === 'users' : false) {
			let userId: string = route.url[2].path;
			return this._postService.getUserPosts(route.params.userId); 
		}

	/*=========================================================================|
    | Red Path                                                                 |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a un usuario, llame a la función 'getUserPosts()' del   |
    | servicio PostService. Recuerda mirar en los parámetros de la ruta, a ver |
    | qué encuentras.                                                          |
    |=========================================================================*/

	/*=========================================================================|
    | Yellow Path                                                              |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a una categoría, llame a la función 'getCategoryPosts()'|
    | del servicio PostService. Recuerda mirar en los parámetros de la ruta, a |
    | ver qué encuentras.                                                      |
    |=========================================================================*/

		if (route.url[0].path === 'posts' && route.url[1] ? 
		route.url[1].path === 'categories' : false) {
			let categoryId: string = route.url[2].path;
			return this._postService.getCategoryPosts(parseInt(route.params.categoryId));
		} else {
			return this._postService.getPosts();
		}
	} // End of the "resolve" method
}
