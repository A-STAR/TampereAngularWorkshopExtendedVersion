# AngularWorkshop II -- extended version

### Route
In workshop, we saw one of the routing types -- eager loading.
Here introduce anther loading type --lazy loading. 

Difference between lazy loading from eager loading is lazy loading loads module on demand.
It means it will bundle feature module in a separate bundle file, not included in main bundle.

It is pretty simple to do:
1. Add a edit-todo.module.ts file to edit-todo folder, because lazy loading only available for module.
2. In the AppRoutes, change routes config:
```
const appRoutes = [
  {path: '', component: TodoComponent},
  {path: 'todo/:id', loadChildren: './edit-todo/edit-todo.module#EditTodoModule'}
];
```
We change 'component' to 'loadChildren', and from actual component to the path of edit-to module file.


### Form
In the workshop, we saw Template driven approach.
Here introduce another approach 'Reactive Form'.

in edit-todo.component.ts:
1. Include ReactiveFormModule:
```
  imports: [
    ...,
    ReactiveFormsModule,
    ...
  ],
```

2. Inject 'FormBuilder' to the edit-todo component's constructor:
```
  constructor(
              ...
              private fb: FormBuilder,
              ...) {
  }
```
Then use this to build our form in ts file:
```
  initForm(todo) {
    this.form = this.fb.group({
      description: [
        todo.description,
        Validators.required
      ],
      dueTo: [
        this.fp.transform(
          (todo.dueTo || new Date().toISOString()),
          'yyyy-MM-dd'
        ),
        [
          Validators.required,
          Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
        ]
      ],
      assignTo: [
        todo.assignTo || '',
        [
          Validators.required,
          Validators.minLength(this.minlength)
        ]
      ]
    });
  }
```
It takes care of initial data and Validation.

Reactive form is good to handle complex form app.


### Pipe

In the workshop, we saw how to use Pipe inside template.
```
{{todo.dueTo | myDateFormat: 'd.M.yyyy'}}
```
There is another approach 'Using pipe as provider':

1. Add pipe to the 'providers':
```
  providers: [
    MyDateFormatPipe
  ]
```

2. Inject into constructor:
```
  constructor(
              ...
              private fp: MyDateFormatPipe) {
  }
```

Using it in ts file:
```
        this.fp.transform(
          (todo.dueTo || new Date().toISOString()),
          'yyyy-MM-dd'
        )
```

This is just a different approach. Cannot say switch one is better. 
One possible benefit is that we can check type-safety during compile time by using this approach,
which is hard to do when you use pipe in your template.
