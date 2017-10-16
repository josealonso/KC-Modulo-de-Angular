import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostsResolveService implements Resolve<Post[]>, OnInit {
	constructor(private _postService: PostService) {}

	ngOnInit(): void {
		// Creo que no hace falta
	}

	resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
		// ¿Por qué no se usa ActivatedRoute?
		let x: number = 1;
		let y: number = 2;
		console.log('HOLA-123456');
		//if (x === y) {
		if (route.url[0].path === 'posts' && route.url[1] ? route.url[1].path === 'users' : false) {
			// if (route.url.includes(`users`)) {
			let userId: string = route.url[2].path;
			return this._postService.getUserPosts(route.params.userId); // El 4 es Hank Moody
		} else {
			
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
			return this._postService.getPosts();
		}
	} // End of the "resolve" method
}
