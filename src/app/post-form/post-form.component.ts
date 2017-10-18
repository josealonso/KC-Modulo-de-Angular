import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';
import { PostService } from '../post.service';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: [ './post-form.component.css' ]
})
export class PostFormComponent {
	postForm: FormGroup;

	// Los atributos son privados por defecto.
	@Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

	constructor(
		private _postService : PostService,
		private _userService: UserService,
		private _formBuilder: FormBuilder
	) {
		this.createForm();
	}
 
	private createForm() {
		/*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Define para este FormGroup los objetos FormControl correspondientes a    |
    | las propiedades 'title', 'intro' y 'body' de los posts. Los dos primeros |
    | son obligatorios, así que recuerda añadir el validador oportuno.         |
    |=========================================================================*/

		this.postForm = this._formBuilder.group({
			title: [ '', [ Validators.required ] ],
			intro: [ '', [ Validators.required ] ],
			body: ''
		});
	}
	// this.postSubmitted.emit(post);
	emitPostSubmitted(): void {
		const post: Post = this.postForm.value;
		post.likes = [];
		post.categories = [];
		post.author = this._userService.getDefaultUser();
		post.publicationDate = Date.now();
		this.postSubmitted.emit(post);
		this._postService.createPost(post);
		this.postSubmitted.subscribe(function() {
          this._postService.getPosts();
		});
	}
}
